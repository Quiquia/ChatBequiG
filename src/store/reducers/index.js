import { combineReducers } from "redux";
import userReducer from "./userReducer";
import contactsReducer from "./contactsReducer";
import selectContactReducer from "./selectContactReducer";

const reducer = combineReducers({
  user: userReducer,
  contacts: contactsReducer,
  selectContact: selectContactReducer,
});

export default reducer;
