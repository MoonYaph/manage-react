import { menuData } from '../utils/config'
import { INIT_DATA } from '../constants/app'

export default (state = menuData, action) => {
  switch (action.type) {
    case INIT_DATA:
      return state
    case 'app/switchTheme':
      return { ...state, darkTheme: !state.darkTheme }
    case 'app/handleNavOpenKeys':
      return { ...state, navOpenKeys: action.openKeys }
    case 'changeMode':
      return { ...state, popover: !state.popover }
    default:
      return state
  }
}
