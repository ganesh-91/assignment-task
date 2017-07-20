export const updateLoginData = (userData) => {
    return {
        type: "UPDATE_LOGIN_DATA",
        data: {
            prop: userData.prop,
            value: userData.value
        }
    };
};

const LoginAction = {
    updateLoginData
};

export default LoginAction;