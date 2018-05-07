export default class HttpUtils {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(result => {
          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.parse(data)
      })
        .then(res => res.json())
        .then(result => {
          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}