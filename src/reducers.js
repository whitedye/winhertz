import { combineReducers } from 'redux';
import { home } from './containers/Home/HomeReducer';
import { me } from './containers/Me/MeReducer';
import { sysTab } from './containers/Main/MainReducer';
import { user } from './containers/User/UserReducer';

const reducers = combineReducers({
  home,
  me,
  user,
  sysTab,
});

export default reducers;
