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
export default function (state = {
  btList: [
    {12313123: "123"}
  ],
  btState: [
    {12313123: false}
  ]
}, action) {
  switch (action.type) {
    case 'RFID_CREATE_ITEM':
      return {
        btList: [action.obj.btList, ...state.btList],
        btState: [action.obj.btState, ...state.btState]
      };
      break;
    case 'RFID_CHANGE':
      break;
    case 'RFID_REMOVE':
      break;
    default:
      return state;
  }
}
