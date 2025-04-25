/* eslint-disable array-callback-return */
export function getUrl() {
    let location = window.location,
      hostname = location.hostname,
      pathname = location.pathname
    if (hostname === 'localhost') {   //本地启动接口地址
      return 'https://text-api' //
    } else {
      return 'https://www/baidu.com'; //正式
    }
  }
  
  //下拉的数据转换
  export function formatData(data, key, value, unshiftName) {
    unshiftName && data.unshift({})
    unshiftName && (data[0][key] = '')
    unshiftName && (data[0][value] = unshiftName)
    return data && data.length > 0 && data.map(function (v, i) {
      return {
        label: v[value],
        value: v[key],
      }
    })
  }
  
  export function formatList(data, list) {
    if (data && data.length == 0) { return list }
    let arr = []
    data.map((v) => {
      arr.push(v.key)
    })
    list.map((v) => {
      if (arr.indexOf(v.id) != -1) {
        v.selected = true
      } else {
        v.selected = false
      }
    })
  
    return list.slice()
  }
  
  