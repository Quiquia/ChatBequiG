import { ADD_NEW_MESSAGE } from "../types";

export const addNewMessage = ({ idOwner, idContact, message }) => ({
  type: ADD_NEW_MESSAGE,
  payload: {
    idOwner,
    idContact,
    message,
  },
});
