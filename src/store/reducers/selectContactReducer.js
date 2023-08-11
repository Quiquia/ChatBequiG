import { SELECT_CONTACT_ID } from "../types";

const initialState = "";

export default function selectContactReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_CONTACT_ID: {
      return action.payload;
    }

    default:
      return state;
  }
}
