import {
  HIDE_ACTIVE_ARROW,
  SET_ACTIVE_ARROW,
  SET_ACTIVE_CALENDAR,
  SET_ACTIVE_HOME,
  SET_ACTIVE_MOVIE,
  SET_ACTIVE_USER,
} from "../action/type";

let initialState = {
  active: {
    home: false,
    movie: false,
    user: false,
    calendar: false,
    arrow:false,
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_MOVIE:
      state.active.movie = payload;
      state.active.user = false;
      state.active.calendar = false;
      return { ...state };
    case SET_ACTIVE_USER:
      state.active.user = payload;
      state.active.movie = false;
      state.active.calendar = false;
      return { ...state };
    case SET_ACTIVE_CALENDAR:
      state.active.calendar = payload;
      state.active.user = false;
      state.active.movie = false;

      return { ...state };
    case SET_ACTIVE_HOME:
      state.active.calendar = false;
      state.active.user = false;
      state.active.movie = false;
      return { ...state };
      case SET_ACTIVE_ARROW:
      state.active.arrow = true;
      return {...state}
      case HIDE_ACTIVE_ARROW:
      state.active.arrow = false;
      return {...state}
    default:
      return state;
  }
};

export default reducer;
