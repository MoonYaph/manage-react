import { ADD_CATEGORY } from '../constants/shop'
import api from '../api'

export const addCategory = category => ({
  type: ADD_CATEGORY,
  category,
})

export const fetchCategory = () => dispatch => {
  api.shop.getCategories().then(res => {
    const data = res
      .map(item => {
        if (item.sub_categories.length > 0) {
          const newData = {
            value: item.name,
            label: item.name,
            children: [],
          }
          item.sub_categories.map((value, key) => {
            if (key === 0) {
              return false
            }
            newData.children.push({
              value: value.name,
              label: value.name,
            })
          })
          return newData
        }
      })
      .filter(i => !!i)
    dispatch(addCategory(data))
  })
}
