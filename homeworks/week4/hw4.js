const request = require('request')

const URL = 'https://api.twitch.tv/kraken/games/top'
const CLIENT_ID = '22oz51wyck39x2mxtu7m8k5s3yzhzz'

request.get(
  {
    url: `${URL}`,
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': `${CLIENT_ID}`
    }
  },
  (err, res, body) => {
    if (err) {
      return console.log('獲取資料失敗', err)
    }

    if (res.statusCode >= 400 && res.statusCode < 500) {
      return console.log(res.statusCode, res.statusMessage)
    }
    if (res.statusCode >= 500) {
      return console.log(res.statusCode, res.statusMessage)
    }

    let data
    try {
      data = JSON.parse(body)
      for (const games of data.top) {
        console.log(`${games.viewers} ${games.game.name}`)
      }
    } catch (err) {
      console.log('錯誤', err)
    }
  }
)
