import React from "react";
import { connect } from 'react-redux'
import {Link, Route} from "react-router-dom";
import Question from "./Question";

function mapStateToProps(state) {
    return {
        questions: state.questions
    };
}

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            points: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.nextButton = this.nextButton.bind(this);
        this.plusPoint = this.plusPoint.bind(this);
    }

    plusPoint() {
        const name = this.state.name;
        const points = this.state.points+1;
        this.setState({
            name: name,
            points: points
        });

    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    nextButton(event){
        if(this.state.name !== "") {
            if (this.props.questions.length !== 0) {
                return (
                    <Link to={`${this.props.match.url}/0`}>
                        <button>Start the Game</button>
                    </Link>
                )
            } else {
                return (
                    <p>Sorry there isn't any questions right now! :(</p>
                )
            }
        }
        else {
            return(
                <div></div>
            )
        }
    }

    render() {
        return (
            <div>
                <p>
                    <Link to="/">Home</Link>
                </p>

                    <div>Player: {this.state.name}</div>
                    <div align="right">Points: {this.state.points}</div>
                <p></p>
                    <Route exact path={`${this.props.match.url}/:questionId`}
                           render={ (props) =>(
                               <Question
                                   plusPoint={this.plusPoint}
                                   data={this.props.questions}
                                   {...props}
                               />
                        )
                        }/>
                    <Route exact path={this.props.match.url}
                           render={() => (
                               <div>
                                   <div>Please give your Name</div>
                                    <input
                                       value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                    <div>{this.nextButton()}</div>
                               </div>
                        )}
                    />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Game);