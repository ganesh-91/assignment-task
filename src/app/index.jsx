import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/app.css";
// import js files
import React from "react";
import { render } from "react-dom";
import { AppRouter } from "./scripts/routes/appRouter.jsx";
render(
    <AppRouter />
, document.getElementById("app"));
