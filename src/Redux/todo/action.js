// The types of actions that you can dispatch to modify the state of the store
export const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  RFID_ADD: 'RFID_ADD',
  RFID_CHANGE: 'RFID_CHANGE',
  RFID_REMOVE: 'RFID_REMOVE'
};

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  add: (item) => {
    return {type: types.ADD, payload: item}
  },
  remove: (index) => {
    return {type: types.REMOVE, payload: index}
  },
  rfid_add: (item) => {
    return {type: types.RFID_ADD, obj: item}
  },
  rfid_change: (item) => {
    return {type: types.RFID_CHANGE, obj: item}
  },
  rfid_remove: (item) => {
    return {type: types.RFID_REMOVE, obj: item}
  }
};