const request = require('request')

const URL = 'https://lidemy-book-store.herokuapp.com'

request.get(`${URL}/books?_limit=10`, (err, res, body) => {
  let bookList
  if (err) {
    return console.log('獲取資料失敗', err)
  }

  try {
    bookList = JSON.parse(body)
    for (let i = 0; i < bookList.length; i++) {
      console.log(`${bookList[i].id} ${bookList[i].name}`)
    }
  } catch (err) {
    console.log('錯誤', err)
  }
})
