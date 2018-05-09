import { AsyncStorage } from "react-native"
import keys from "../data/keys.json"

export const FLAG_LANGUAGE = { flag_language: "flag_language_language", flag_key: "flag_language_key" }

export default class language {
  constructor (flag) {
    this.flag = flag
  }
  fetch () {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(this.flag, (err, result) => {
        if (err) {
          reject(err)
        } else {
          if (result) {
            try {
              resolve(JSON.parse(result))
            } catch(err) {
              reject(err)
            }
          } else {
            const data = this.flag === FLAG_LANGUAGE.flag_key? keys: null
            this.save(data)
            resolve(data)
          }
        }
      })
    })
  }
  save (data) {
    AsyncStorage.setItem(this.flag, JSON.stringify(data), err => {
      
    })
  }
}