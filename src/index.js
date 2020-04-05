import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import Home from "./js/components/Home";

render(
    <Provider store={store}>
            <Home />
    </Provider>,
    document.getElementById("root")
);