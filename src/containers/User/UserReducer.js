import {
  SET_LOGGED_IN,
  SET_FROM_URL
} from '../../utils/constans';

const initUser = {
  isLogin: false,
  info: {
    name: '张三',
    phone: '18909090808',
  },
  fromUrl: null,
}

export function user(state = initUser, action) {

  switch (action.type) {
  case SET_LOGGED_IN:
  
    return Object.assign({}, state, {
      isLogin: action.isLogin,
    });
  case SET_FROM_URL:
    return Object.assign({}, state, {
      fromUrl: action.data,
    });
  default:
    return state;
  }
}
