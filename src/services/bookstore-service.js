import { data } from "./data"

export default class BookstoreService {
  getBooks() {
    return new Promise( (resolve, reject) => {
      //setTimeout(()=>{reject('Oops')}, 700)
      setTimeout(()=>{resolve(data)}, 700)
    })
  }
}
