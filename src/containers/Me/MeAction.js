import {
  SET_ME_DETAIL,
} from '../../utils/constans';

export function setHomeDetail(show) {
  return {
    type: SET_ME_DETAIL,
    showMe: show,
  };
}
