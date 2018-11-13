import { pathOr } from "ramda";
import {
  ADD_MESSAGE,
  UPDATE_MESSAGE,
} from "./consts";

const initialState = {
  message: "",
  messages: [],
  isSending: false
};

export default (state = initialState, action) => {
  console.log(action.type, action)
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        message: "",
        messages: [...state.messages, { message: state.message, time: new Date(), me: true }],
        isSending: false
      };

    case UPDATE_MESSAGE:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};
