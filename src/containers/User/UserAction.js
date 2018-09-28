import { 
  SET_LOGGED_IN,
  SET_FROM_URL 
} from "../../utils/constans";
import history from '../../history';
import { setSelectedTab } from '../../public/action';

export const sfLogin = (fromUrl) => dispatch => {
  const path = fromUrl ? fromUrl : '/home';
  history.replace(path);
  const tab = path.split('/')[0];
  dispatch(setSelectedTab(tab));
  dispatch(setLoginStatus(true));
}
export const loginout = () =>{

}
export function setLoginStatus(status){
  return {
    type: SET_LOGGED_IN,
    isLogin: status,
  }
}

/**
 *
 * @param {*} data
 */

export function setFromUrl(data) {
  localStorage.setItem('fromUrl', data);
  return {
    type: SET_FROM_URL,
    data,
  };
}