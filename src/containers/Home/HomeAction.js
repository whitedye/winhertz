import {
  SET_HOME_DETAIL,
} from '../../utils/constans';
import { getHomeData } from '../../Service/home';

export function setHomeDetail(data) {
  return {
    type: SET_HOME_DETAIL,
    data,
  };
}

export const getData = (pageno=1, pagesize=10) => (dispatch) =>{
  const params = { pageno, pagesize };
  getHomeData(params).then(res=>{
    console.log('请求结果=', res);
    dispatch(setHomeDetail(res.data));
  }).catch(err=>{
    console.log('错误=', err);
  });
}

