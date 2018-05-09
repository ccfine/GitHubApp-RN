export default class array {
  static updateArray(array, item) {
    for (let i = 0, len = array.length; i < len; i++ ) {
      if (array[i] === item) {
        array.splice(i, 1)
        return
      }
      array.push(item)
    }
  }
}