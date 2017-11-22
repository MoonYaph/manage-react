import lodash from 'lodash'

export const arrayToTree = (array, id, sid, children='children') => {
  const data = lodash.cloneDeep(array)
  const result = []
  const map = {}
  data.forEach((item, index) => {
    map[data[index][id]] = data[index]
  })
  data.forEach((item) => {
    const hash = map[item[sid]]
    if (hash) {
      if (!hash[children]) {
        hash[children] = []
      }
      hash[children].push(item)
    } else {
      result.push(item)
    }
  })
  return result
}


