import {
  FILTER_CHANGE,
  SEARCH_DATA,
  SHOW_MODAL,
  SWITCH_MOTION,
} from '../constants/shop'

const filterChange = value => ({
  type: FILTER_CHANGE,
  value,
})

export const onFilterChange = value => dispatch => dispatch(filterChange(value))

const searchData = ({ field, keyword }) => ({
  type: SEARCH_DATA,
  field,
  keyword,
})

export const onSearchData = ({ field, keyword }) => dispatch =>
  keyword.length && dispatch(searchData({ field, keyword }))

const add = () => ({
  type: SHOW_MODAL,
})
export const onAdd = () => dispatch => dispatch(add())

const switchMotion = () => ({
  type: SWITCH_MOTION,
})

export const onSwitchMotion = () => dispatch => dispatch(switchMotion())
