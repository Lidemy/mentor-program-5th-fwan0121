const request = require('request')
const process = require('process')

const URL = 'https://restcountries.eu/rest/v2'

const query = process.argv[2]

function queryCountryInfo(query) {
  if (!query) {
    return console.log('請輸入國家名稱')
  }
  request.get(`${URL}/name/${query}`, (err, res, body) => {
    let data
    if (err) {
      return console.log('獲取資料失敗', err)
    }

    if (res.statusCode >= 400 && res.statusCode < 500) {
      return console.log('找不到國家資訊')
    }
    if (res.statusCode >= 500) {
      return console.log(res.statusCode, res.statusMessage)
    }

    try {
      data = JSON.parse(body)
      for (let i = 0; i < data.length; i++) {
        console.log('===========')
        console.log(`國家：${data[i].name}`)
        console.log(`首都：${data[i].capital}`)
        console.log(`貨幣：${data[i].currencies[0].code}`)
        console.log(`國碼：${data[i].numericCode}`)
      }
    } catch (err) {
      console.log('錯誤', err)
    }
  })
}

queryCountryInfo(query)
