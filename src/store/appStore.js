import {
    createStore
} from "redux";
import update from "immutability-helper";

const loginData = {
    userName: "",
    password: "",
    userNameValid: true,
    passwordValid: true
};

const loginReducer = function(state, action) {
    let newState = state;
    if (typeof state === "undefined") {
        return loginData;
    }

    switch (action.type) {
        case "UPDATE_LOGIN_DATA":
            newState = update(state, { [action.data.prop]: { $set: action.data.value }});
            break;
    }
    return newState;
};

export const store = createStore(loginReducer);