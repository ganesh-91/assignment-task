import { browserHistory } from "react-router";

export const SCREENS = {
    "login": "/login",
    "home": "/home"
};

export function getPath(screenName) {
    return SCREENS[screenName];
}
export function navigate(screenName) {

    const route = SCREENS[screenName];

    if (route) {
        const finalRoute = route;
        browserHistory.push(finalRoute);
    } else {
        console.warn("Invalid route! Please check screen name.");
    }
}
