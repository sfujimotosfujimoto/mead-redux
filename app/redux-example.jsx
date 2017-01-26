var redux = require('redux');

console.log('Starting reduxx example');

var stateDefault = {
  name: 'SF',
  hobbies: []
}

var nextHobbyId = 1;

var reducer = ( state = stateDefault, action) => {
  console.log(action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
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
  type: 'CHANGE_NAME',
  name: 'Terry'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Ayler'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Basketball'
});
