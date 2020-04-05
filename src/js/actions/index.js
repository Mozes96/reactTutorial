import { ADD_QUESTION, DELETE_QUESTION } from "../contants/action-types";

export function addQuestion(payload) {
    return { type: ADD_QUESTION, payload }
};

export function deleteQuestion(payload){
  return{ type: DELETE_QUESTION, payload }
};
