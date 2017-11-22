import { INIT_DATA } from '../constants/app';


export const initMenu = () => ({
  type: INIT_DATA,
})

export const init = () => dispatch => dispatch(initMenu())
