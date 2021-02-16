import { SET_CREDENTIALS, SET_TOKEN } from "../action/type";
let initialState = {
  token: "",
  credentialsA: {},
};

const reducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case SET_TOKEN:
      return { ...state, token: payload };
    case SET_CREDENTIALS:
      state.credentialsA = payload;
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
