import { pathOr } from "ramda";
import {
  SEND_MESSAGE,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_SUCCESS,
  RECEIVE_MESSAGE
} from "./consts";

const initialState = {
  message: "",
  messages: [],
  isSending: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        isSending: true
      };

    case SEND_MESSAGE_FAILURE:
      return {
        ...state,
        isSending: false
      };

    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        message: "",
        messages: [...action.messages, action.message],
        isSending: false
      };

    case RECEIVE_MESSAGE:
      return {};

    default:
      return state;
  }
};
