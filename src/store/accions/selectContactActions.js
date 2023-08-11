import { SELECT_CONTACT_ID } from "../types";

export const selectContactId = (id) => ({
  type: SELECT_CONTACT_ID,
  payload: id,
});
