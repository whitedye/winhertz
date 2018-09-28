import {
  SET_ME_DETAIL,
} from '../../utils/constans';

const initMe = {
  showMe: false,
};

export function me(state = initMe, action) {

  switch (action.type) {
  case SET_ME_DETAIL:
    return {
      ...state,
      showMe: action.showMe,
    };
  default:
    return state;
  }
}
