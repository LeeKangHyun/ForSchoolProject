// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.

/*
@json1
@RFID => 고유값 number
@name => string
json1 = [
  {RFID: name},
  {RFID: name},
  {RFID: name},
  ...
]

@json2
@RFID => number
@YNsteal => boolean
json2 = [
  {RFID: YNsteal},
  {RFID: YNsteal},
  {RFID: YNsteal},
  ...
]
 */
export const reducer = (state = {
  todos: [
    "1",
    "2",
    "3",
  ],
  btList: [
    {12313123: "123"}
  ],
  btState: [
    {12313123: false}
  ]
}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      return {
        ...state,
        todos: [payload, ...state.todos],
        btList: [...state.btList],
        btState: [...state.btState]
      };
      break;
    case 'REMOVE':
      return {
        ...state,
        todos: state.todos.filter((todo, i) => i !== payload)
      };
      break;
      
    case 'RFID_ADD':
      return {
        btList: [action.obj, ...state.btList],
        btState: [action.obj, ...state.btState]
      };
      break;
    case 'RFID_CHANGE':
      break;
    case 'RFID_REMOVE':
      break;
    default:
      return state;
  }
};