import { combineReducers } from 'redux';
import counterReducer from './counterSlice';
import changeSlice from './changeSlice';

// tổng hợp các slice khi có nhiều slice(các trạng thái)
const rootReducer = combineReducers({
  counter: counterReducer,
  user: changeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
