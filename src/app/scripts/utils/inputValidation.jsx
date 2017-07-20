
const numberRegex = /[0-9]\d/;
const phonenumberRegex = /^[0-9]{10}$/;
const zipcodeRegex = /^[0-9]{6}$/;
const textRegex = /[a-z A-z]/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[!@#$&*])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{5,16}$/;

function numericValidation(value) {
    if (value === "") return null;
    else if (numberRegex.test(value)) return "success";
    else if (!(numberRegex.test(value))) return "error";
}

function phoneValidation(value) {
    if (value === "") return null;
    else if (phonenumberRegex.test(value)) return "success";
    else if (!(phonenumberRegex.test(value))) return "error";
}

function zipValidation(value) {
    if (value === "") return null;
    else if (zipcodeRegex.test(value)) return "success";
    else if (!(zipcodeRegex.test(value))) return "error";
}

function alphaNumericValidation(value) {
    if (value === "") return null;
    else if (textRegex.test(value)) return "success";
    else if (!(textRegex.test(value))) return "error";
}
function passwordValidation(value) {
    if (value === "") {
        return null;
    } else if (passwordRegex.test(value)) {
        // if ((value) <= 12) {
        //     this.tipElement = "Weak";
        // } else {
        //     this.tipElement = "Strong";
        // }
        return "success";
    } else if (!(passwordRegex.test(value))) {
        return "error";
    }
}
function emailValidation(value) {
    if (value === "") {
        return null;
    } else if (emailRegex.test(value)) {
        return "success";
    } else if (!(emailRegex.test(value))) {
        return "error";
    }
}
function compareValidation(value1, value2) {
    if (value1 === "") {
        return null;
    } else if (value1 === value2) {
        return "success";
    } else if (value1 !== value2) {
        return "error";
    }
}

const validations = {
    number: numericValidation,
    zip: zipValidation,
    phone: phoneValidation,
    text: alphaNumericValidation,
    email: emailValidation,
    password: passwordValidation,
    compare: compareValidation
};

export default validations;