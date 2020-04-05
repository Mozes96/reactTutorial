import React, { Component } from "react";
import { connect } from "react-redux";
import { addQuestion } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addQuestion: question => dispatch(addQuestion(question))
    };
}
class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            question: "",
            goodAnswer: "",
            wrongAnswer1: "",
            wrongAnswer2: "",
            wrongAnswer3: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.buttonDisable = this.buttonDisable.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addQuestion(this.state);
        this.setState({ question: "" });
        this.setState({ goodAnswer: "" });
        this.setState({ wrongAnswer1: "" });
        this.setState({ wrongAnswer2: "" });
        this.setState({ wrongAnswer3: "" });
    }

    buttonDisable(){
        return !(this.state.question !== "" &&
            this.state.goodAnswer !== "" &&
            this.state.wrongAnswer1 !== "" &&
            this.state.wrongAnswer2 !== "" &&
            this.state.wrongAnswer3 !== "");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <p>
                    <label htmlFor="question">Question:</label>
                    <input
                        type="text"
                        id="question"
                        value={this.state.question}
                        onChange={this.handleChange}
                    />
                    </p>
                    <p>
                    <label htmlFor="goodAnswer">Good answer: </label>
                    <input
                        type="text"
                        id="goodAnswer"
                        value={this.state.goodAnswer}
                        onChange={this.handleChange}
                    />
                    </p>
                    <p>
                    <label htmlFor="wrongAnswer1">Wrong answer: </label>
                    <input
                        type="text"
                        id="wrongAnswer1"
                        value={this.state.wrongAnswer1}
                        onChange={this.handleChange}
                    />
                    </p>
                    <p>
                    <label htmlFor="wrongAnswer2">Wrong answer: </label>
                    <input
                        type="text"
                        id="wrongAnswer2"
                        value={this.state.wrongAnswer2}
                        onChange={this.handleChange}
                    />
                    </p>
                    <p>
                    <label htmlFor="wrongAnswer3">Wrong answer: </label>
                    <input
                        type="text"
                        id="wrongAnswer3"
                        value={this.state.wrongAnswer3}
                        onChange={this.handleChange}
                    />
                    </p>
                </div>
                <button type="submit" disabled={this.buttonDisable()}
                >SAVE</button>
            </form>
        );
    }
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;