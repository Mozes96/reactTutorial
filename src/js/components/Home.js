import React from "react";
import { BrowserRouter, Link, Route, Switch  } from 'react-router-dom';
import AddQuestion from "./App";
import Game from "./Game";

const Start = () => (
    <div>
        <h2>Home</h2>
        <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
               <Link to="/add-question">
                    <button>Add question</button>
                </Link>
                <br></br>
                <Link to="/game">
                    <button>Game</button>
                </Link>
            </ul>
        </nav>
    </div>
);

class Home extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Start}/>
                    <Route path="/add-question" component={AddQuestion}/>
                    <Route path="/game" component={Game}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Home;