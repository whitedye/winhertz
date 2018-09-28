import {
  SET_TABAR_STATE,
  HIDDEN_TABBAR
} from '../../utils/constans';

const initTab = {
  selectedTab: 'homeTab',
  hidden: false,
}

export const sysTab = (state = initTab, action) => {
  switch (action.type) {
    case SET_TABAR_STATE:
      return {
        ...state,
        selectedTab: action.selectedTab ,
      };
    case HIDDEN_TABBAR:
      return {
        ...state,
        hidden: action.hidden
      }
    default:
      return state;
    }
}