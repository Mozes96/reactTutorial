import React from "react";
import List from "./List";
import Form from "./Form";
import {Link} from "react-router-dom";

const App = () => (
    <>
        <Link to="/">Home</Link>
        <div>
            <h2>Questions</h2>
            <List />
        </div>
        <div>
            <h2>Add a new question</h2>
            <Form />
        </div>
    </>
);

export default App;