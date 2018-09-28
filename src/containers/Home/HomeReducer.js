import {
  SET_HOME_DETAIL,
} from '../../utils/constans';

const initHome = {
  home: {},
};

export function home(state = initHome, action) {

  switch (action.type) {
  case SET_HOME_DETAIL:
    return {
      ...state,
      home: {...action.data},
    };
  default:
    return state;
  }
}
