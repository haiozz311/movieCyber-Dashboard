import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import active from "../redux/reducers/active";
import movie from "../redux/reducers/movie";
import user from "../redux/reducers/user";
import credentials from "../redux/reducers/credentials";
import modalMovies from "../redux/reducers/modalMovie";
import modalUsers from "../redux/reducers/modalUser";
import showTime from "../redux/reducers/showTime";
import thunk from "redux-thunk";

const reducer = combineReducers({
  active,
  movie,
  user,
  credentials,
  modalMovies,
  modalUsers,
  showTime,
  
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
  // applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
