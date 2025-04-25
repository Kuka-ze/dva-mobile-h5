import fetch from 'dva/fetch';
import { Toast } from 'antd-mobile';
import { getUrl } from './util';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options = "{}", call = () => { }, err = () => { }) {
  let homeAuth = localStorage.getItem('homeAuth') ? JSON.parse(localStorage.getItem('homeAuth')) : {};

  let signData = localStorage.getItem('signData') ? JSON.parse(localStorage.getItem('signData')) : {};
  console.log('userInfo', signData)

  let params = {
    sysUserId: homeAuth.sysUserId,
    areaCode: signData.sign == 'mlxhapp' ? homeAuth.areaCode:'330100',
    ...options,
  }
  let urls = getUrl() + url;
  console.log("接口入参：", params);
  console.log("接口urls:", urls);
  return new Promise((resolve, reject) => {
    return fetch(urls, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(data => {
        console.log("data:", data);
        if (data.code == 1) {
          resolve(data);
        } else {
          Toast.info(data.message, 2);
          resolve(data);
          // reject(data.message)
        }
        return data;
      })
      .catch(err => ({ err }));

  })
}
