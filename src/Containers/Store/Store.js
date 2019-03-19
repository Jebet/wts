import { combineReducers } from "redux";
import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";

import {
  combineForms,
  createForms // optional
} from "react-redux-form";

const initialUserState = {
  firstName: ""
};

// If you want your entire store to have the form state...

const store = createStore(
  combineForms({
    user: initialUserState
  }),
  applyMiddleware(thunk)
);

// Or you have an existing store and want the form state to
// exist alongside the existing state...
// const store = createStore(combineReducers({
//existing: existingReducer,
//foo: fooReducer,
//bar: barReducer,

// ... use createForms, which will create:
// the model reducer at "user"
// the forms reducer at "forms" (e.g., "forms.user")
// ...createForms({
//user: initialUserState,
//}),
//}));

export default store;
