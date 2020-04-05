import { ADD_QUESTION, DELETE_QUESTION } from "../contants/action-types";

const initialState = {
    questions: []
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_QUESTION: {
            action.payload.id = state.questions.length;
            return Object.assign({}, state, {
                questions: state.questions.concat(action.payload)
            });
        }
        case DELETE_QUESTION: {
                let questions = state.questions;
                questions.splice(action.payload, 1);
                for(let i = 0; i < questions.length; i++){
                    questions[i].id = i;
                }
                return Object.assign({}, state, {
                    questions: questions
                });
            }
        default:   return state;
    }
}

export default rootReducer;