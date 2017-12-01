import { combineReducers } from 'redux';

//리듀서를 Import
import rfid from './rfid/reducer';
import todo from './todo/reducer';

const rootReducer = combineReducers({
  /*
   필요한 리듀서들을 여기에
   */
  rfid,
  todo
});

module.exports = rootReducer;
