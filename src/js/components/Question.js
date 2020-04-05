import React from "react";
import {Link} from "react-router-dom";

class Question extends React.Component{

    constructor(props) {
        super(props);
        const task = this.props.data.find(
            q => q.id === parseInt(this.props.match.params.questionId)
        );
        this.state = {
            task: task,
            isAnswered: false,
            selected: "",
            goodOrBad: null //false means the answer was bad
        };
        this.update = this.update.bind(this);
        this.goodAnswer = this.goodAnswer.bind(this);
        this.wrongAnswer = this.wrongAnswer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.goodOrBad = this.goodOrBad.bind(this);
    }

    handleSubmit(event) {
        if(this.state.selected === "") {
            alert("You didn't pick your answer");
        }
        else if(this.state.selected === "goodAnswer") {
            this.goodAnswer();
        }
        else {
            this.wrongAnswer()
        }
        event.preventDefault();
    }

    handleChange(event) {
        const task = this.state.task;
        const isAnswered = this.state.isAnswered;
        this.setState({
            task: task,
            isAnswered: isAnswered,
            selected: event.target.value
        });
    }

    goodAnswer(){
        this.props.plusPoint();
        const task = this.state.task;
        this.setState({
            task: task,
            isAnswered: true,
            selected: "",
            goodOrBad: true
        });
    }

    wrongAnswer(){
        const task = this.state.task;
        this.setState({
            task: task,
            isAnswered: true,
            selected: "",
            goodOrBad: false
        });
    }

    goodOrBad() {
        if (this.state.goodOrBad) {
            return (
                <div>Your answer was <font color="green">good</font></div>
            )
        } else {
            return (
                <div>Your answer was <font color="red">bad</font></div>
            )
        }
    }

    update(){
        let tmp = this.props.data.find(
            q => q.id === parseInt(this.props.match.params.questionId)+1
        );
        this.setState({
            task: tmp,
            isAnswered: false,
            selected: ""
        });
    }

    render() {
        if(this.state.task === undefined) {
            return (
                <div>
                    <div>There is no Question</div>
                </div>
            )
        }
        else {
            let nextId = this.state.task.id+1;
            let baseUrl = this.props.match.url.substring(0, this.props.match.url.length-2);
            if(this.state.isAnswered === false)
                return (
                    <div>
                        <p>{this.state.task.question}</p>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Please select one answer:
                                <select value={this.state.selected} onChange={this.handleChange}>
                                    <option value=''></option>
                                    <option value="goodAnswer">{this.state.task.goodAnswer}</option>
                                    <option value="wrongAnswer1">{this.state.task.wrongAnswer1}</option>
                                    <option value="wrongAnswer2">{this.state.task.wrongAnswer2}</option>
                                    <option value="wrongAnswer3">{this.state.task.wrongAnswer3}</option>
                                </select>
                            </label>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                );
            else
                return(
                    <div>
                        <p>The good answer was: {this.state.task.goodAnswer}</p>
                        <div>
                            {this.goodOrBad()}
                        </div>
                        <div align="right">
                            You sended your answer already, so go to the next question ------->
                            <Link to={`${baseUrl}/${nextId.toString()}`} onClick={this.update}>
                                <button>Next Question</button>
                            </Link>
                        </div>
                    </div>
                );
        }
    }
}

export default Question;