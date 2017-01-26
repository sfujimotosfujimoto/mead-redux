var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: [],
  name: 'SF'
}

var reducer = ( state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;

  }
};

const store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.subscribe(() => {
  var state = store.getState();

  document.getElementById('app').innerHTML = state.searchText;
});

// var unsubscribe = store.subscribe(() => {
//   var state = store.getState();
//
//   console.log('name is: ', state.name);
//   document.getElementById('app').innerHTML = state.name;
// });

var currentState = store.getState();
console.log('currentState: ', currentState);


store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'dog'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Something else'
});
