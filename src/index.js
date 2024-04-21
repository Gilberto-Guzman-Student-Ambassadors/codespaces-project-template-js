/**
 * Entry point of application, where App is rendered within the div with the id of "app"
 */

/*
    Advice: Deprecation notice: ReactDOM.render is no longer supported in React 18
    I updated the code to support react 18

    Thanks to stackoverflow: https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18

    Before:
    import React from "react";
    import { render } from "react-dom";

    import App from "./App";

    render(<App></App>, document.getElementById("app"));

    After:
*/

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = document.getElementById("app");
ReactDOM.createRoot(root).render(<App />);
