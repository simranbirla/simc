import { SIGN_IN, SIGN_OUT } from "../actions/type";
const INITIAL_STATE = {
  //=>const variable should not be changed at all
  isSignedIn: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};

export default authReducer;