import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootreducer from "./rootreducer";

const middlewares = [logger, thunk];

const store = createStore(rootreducer, applyMiddleware(...middlewares));

export default store;
