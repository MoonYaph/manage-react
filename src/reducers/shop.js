import { SEARCH_DATA } from '../constants/shop'

const initialState = {
  currentItem: {},
  modalVisible: false,
  modaltype: 'create',
  selectedRowKeys: [],
  isMotion: false,
  list: [],
  pagination: {
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: total => `Total ${total} Items`,
    current: 1,
    total: 0,
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA:
      return state
    default:
      return state
  }
}
