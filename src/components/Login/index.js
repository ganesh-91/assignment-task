import React, { Component } from "react";
import { FormGroup,FormControl,Col,Form,Button } from "react-bootstrap";
import { connect } from "react-redux";
import loginAction from "../../action/loginAction";

class Login extends Component {
    constructor() {
        super();
        this.saveClickHandler = this.saveClickHandler.bind(this);
    }
    render() {
        return (
            <Col md={4} mdOffset={4}>
                {this.getFormTemplate()}
            </Col>
        );
    }

    getFormTemplate() {
        return (
            <Form className="myForm">
                <FormGroup controlId="formEmail" validationState={(this.props.loginData.userNameValid ? null : "error")}>
                    <FormControl type="email" value={this.props.loginData.userName} placeholder="User Name(Email Id) *" onChange={this.updateEmail.bind(this)} required />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup controlId="formPassword" validationState={(this.props.loginData.passwordValid ? null : "error")}>
                    <FormControl type="password" value={this.props.loginData.password} placeholder="Password *" onChange={this.updatePass.bind(this)} required />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup>
                    <Col mdOffset={1} md={10} className="text-center">
                        <Button className="text-center" bsSize="small" bsStyle="primary" onClick={this.saveClickHandler} >Login</Button>
                    </Col>
                    <div className="clearfix" />
                </FormGroup>
            </Form>
        );
    }

    emailValidation(value) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (value === "") {
            return null;
        } else if (emailRegex.test(value)) {
            return "success";
        } else if (!(emailRegex.test(value))) {
            return "error";
        }
    }

    updateEmail(e) {
        this.props.updateLoginData({ prop: "userName", value: e.target.value });
        this.props.updateLoginData({ prop: "userNameValid", value: true });
    }
    updatePass(e) {
        this.props.updateLoginData({ prop: "password", value: e.target.value });
        this.props.updateLoginData({ prop: "passwordValid", value: true });
    }
    saveClickHandler() {
        if ((this.props.loginData.userName === "") ||
            (this.props.loginData.password === "")) {
            if (this.props.loginData.userName === "") {
                this.props.updateLoginData({ prop: "userNameValid", value: false });
            }
            if (this.emailValidation(this.props.loginData.userName) === "error") {
                this.props.updateLoginData({ prop: "userNameValid", value: false });
            }
            if (this.props.loginData.password === "") {
                this.props.updateLoginData({ prop: "passwordValid", value: false });
            }

        } else {
            let resetList = [
                { prop: "passwordValid", value: true },
                { prop: "userNameValid", value: true }
            ];
            resetList.map((list) => {
                return(this.props.updateLoginData(list.prop, list.value));
            });
            //  ajax call here , in then the user will be routed to home page
            this.props.history.push('/home');
        }
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        updateLoginData: (data) => {
            dispatch(loginAction.updateLoginData(data));
        }
    };
};

const mapStateToProps = (store) => {
    return {
        loginData: store
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);