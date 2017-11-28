// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.
export const reducer = (state = {
  todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      return {
        ...state,
        todos: [payload, ...state.todos]
      };
      break;
    case 'REMOVE':
      return {
        ...state,
        todos: state.todos.filter((todo, i) => i !== payload)
      };
      break;
    default:
      return state;
  }
};