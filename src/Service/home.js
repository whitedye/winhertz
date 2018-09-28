import { serverURL } from './service';
import { fetchPost } from './request';

export function getHomeData (params){
  return fetchPost(`${serverURL}/phone/findAllArea`, {device: 'ios'}, params);
}