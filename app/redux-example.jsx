var redux = require('redux');

console.log('Starting redux example');

var reducer = ( state = {name: 'Anonymous'}, action) => {
  return state;
};

const store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState: ', currentState);
