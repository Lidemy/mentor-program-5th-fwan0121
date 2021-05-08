const request = require('request')
const process = require('process')

const URL = 'https://lidemy-book-store.herokuapp.com'

const action = process.argv[2]
const params = process.argv[3]

switch (action) {
  case 'list':
    getBooks()
    break
  case 'read':
    quaryOne(params)
    break
  case 'delete':
    deleteOne(params)
    break
  case 'create':
    insertOne(params)
    break
  case 'update':
    updateOne(params, process.argv[4])
    break
}

function getBooks() {
  request.get(`${URL}/books?_limit=20`, (err, res, body) => {
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
}

function quaryOne(id) {
  if (!id) {
    return console.log('請輸入要查詢的id')
  }
  request.get(`${URL}/books/${id}`, (err, res, body) => {
    let book
    if (err) {
      return console.log('獲取資料失敗', err)
    }
    if (res.statusCode >= 400 && res.statusCode < 500) {
      return console.log(res.statusCode, res.statusMessage)
    }
    if (res.statusCode >= 500) {
      return console.log(res.statusCode, res.statusMessage)
    }
    try {
      book = JSON.parse(body)
      console.log(`${book.id} ${book.name}`)
    } catch (err) {
      console.log('錯誤', err)
    }
  })
}

function deleteOne(id) {
  if (!id) {
    return console.log('請輸入要刪除的id')
  }
  request.delete(`${URL}/books/${id}`, (err, res, body) => {
    if (err) {
      return console.log('資料刪除失敗', err)
    }
    if (res.statusCode >= 400 && res.statusCode < 500) {
      return console.log(res.statusCode, res.statusMessage)
    }
    if (res.statusCode >= 500) {
      return console.log(res.statusCode, res.statusMessage)
    }
    console.log('成功刪除')
  })
}

function insertOne(bookName) {
  if (!bookName) {
    return console.log('請輸入要新增的書名')
  }
  request.post(
    {
      url: `${URL}/books/`,
      form:
      {
        name: bookName
      }
    },
    (err, res, body) => {
      const data = JSON.parse(body)
      if (err) {
        return console.log('資料新增失敗', err)
      }
      if (res.statusCode >= 400 && res.statusCode < 500) {
        return console.log(res.statusCode, res.statusMessage)
      }
      if (res.statusCode >= 500) {
        return console.log(res.statusCode, res.statusMessage)
      }
      console.log(`成功新增一本名為${data.name}的書`)
    })
}

function updateOne(id, bookName) {
  if (!id) {
    return console.log('請輸入要修改的書名id')
  }
  if (!bookName) {
    return console.log('請輸入修改的書名')
  }
  request.patch(
    {
      url: `${URL}/books/${id}`,
      form:
      {
        name: bookName
      }
    },
    (err, res, body) => {
      const data = JSON.parse(body)
      if (err) {
        return console.log('資料更新失敗', err)
      }
      if (res.statusCode >= 400 && res.statusCode < 500) {
        return console.log(res.statusCode, res.statusMessage)
      }
      if (res.statusCode >= 500) {
        return console.log(res.statusCode, res.statusMessage)
      }
      console.log(`成功更新id:${data.id}的書名為${data.name}`)
    })
}
