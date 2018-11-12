import { pathOr } from "ramda";
import {
  SEND_MESSAGE,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_SUCCESS,
  RECEIVE_MESSAGE,
  UPDATE_MESSAGE,
} from "./consts";

const initialState = {
  message: "",
  messages: [],
  isSending: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        isSending: true
      };

    case SEND_MESSAGE_FAILURE:
      return {
        ...state,
        isSending: false
      };

    case SEND_MESSAGE:
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        message: "",
        messages: [...state.messages, { message: state.message, time: new Date(), me: true }],
        isSending: false
      };

    case RECEIVE_MESSAGE:
      return {};

    case UPDATE_MESSAGE:
      console.log(UPDATE_MESSAGE, action)
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};
