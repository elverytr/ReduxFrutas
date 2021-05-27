import { createStore } from "redux";
import reducer from "../reducers";

import { obtenerStateStorage, guardarStateStorage } from "../LocalStorage";

const storageState = obtenerStateStorage();

const store = createStore(
  reducer,
  storageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  guardarStateStorage({
    frutas: store.getState().frutas,
  });
});

export default store;
