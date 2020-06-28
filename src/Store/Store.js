import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './Reducers/reducer';

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    };
  };
};

const saveToLocalStorage = (state) => {
  try {
    const serilazedState = JSON.stringify(state);
    localStorage.setItem('state', serilazedState);
  } catch (error) {
    console.log(error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serilazedState = localStorage.getItem('state');
    if (serilazedState === null) return undefined;
    return JSON.parse(serilazedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const presistedState = loadFromLocalStorage();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  presistedState,
  composeEnhancers(applyMiddleware(logger))
);

store.subscribe(() => saveToLocalStorage(store.getState()));
