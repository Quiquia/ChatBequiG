import data from "../data.json";
import { ADD_NEW_MESSAGE } from "../types";

const initialState = data.contactos;

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      const { idOwner, idContact, message } = action.payload;
      const nowDate = new Date().toISOString();

      const newList = state.map((contact) =>
        contact.phone === idContact
          ? {
              ...contact,
              messages: [
                ...contact.messages,
                {
                  content: message,
                  date: nowDate,
                  id: nowDate,
                  isOwnerContact: false,
                  ownerId: idOwner,
                },
              ],
            }
          : contact
      );

      console.log(newList);

      return newList;
    }

    default:
      return state;
  }
}
