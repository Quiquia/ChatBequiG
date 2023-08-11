import { legacy_createStore as createStore } from "redux";
import reducer from "./reducers/index";

const store = createStore(reducer);

store.subscribe(() => console.log(store));

export default store;
