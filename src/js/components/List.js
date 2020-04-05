import React from "react";
import { connect } from "react-redux";
import { deleteQuestion } from "../actions";

class ConnectedList2 extends React.Component {
    render() {
        return (
            <div>
                <table border="1px solid black">
                    <tbody>
                    <tr>
                        <th>Question</th>
                        <th>Good answer</th>
                        <th>Wrong answer</th>
                        <th>Wrong answer</th>
                        <th>Wrong answer</th>
                    </tr>
                    {this.props.questions.map(el => (
                        <tr key={el.id}>
                            <td>{el.question}</td>
                            <td>{el.goodAnswer}</td>
                            <td>{el.wrongAnswer1}</td>
                            <td>{el.wrongAnswer2}</td>
                            <td>{el.wrongAnswer3}</td>
                            <button onClick={
                                () => {
                                    this.props.deleteQ(el.id);
                                    this.forceUpdate();
                                }
                            }
                            >DELETE</button>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        questions: state.questions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteQ : id => dispatch(deleteQuestion(id))
    };
};

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList2);
export default List;