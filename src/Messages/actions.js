import { ADD_MESSAGE, RECEIVE_MESSAGE, UPDATE_MESSAGE } from "./consts";

export const addMessage = message => ({ type: ADD_MESSAGE, message, websocket: true });

export const receiveMessage = message => ({ type: RECEIVE_MESSAGE, message });

export const updateMessage = message => ({ type: UPDATE_MESSAGE, message });