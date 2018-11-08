import { SEND_MESSAGE, RECEIVE_MESSAGE } from "./consts";

export const sendMessage = message => ({ type: SEND_MESSAGE, message });

export const receiveMessage = message => ({ type: RECEIVE_MESSAGE, message });
