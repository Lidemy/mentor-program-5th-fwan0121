const request = require('request')
const process = require('process')

const URL = 'https://api.twitch.tv/kraken/streams/'
const CLIENT_ID = '22oz51wyck39x2mxtu7m8k5s3yzhzz'

const GAME_NAME = process.argv[2]
const TOTAL = 200
const LIMIT = 100

function getTopStreamers(gameName, limit, offset, total) {
  if (!gameName) {
    return console.log('請輸入遊戲名稱')
  }
  request.get(
    {
      url: `${URL}?game=${gameName}&limit=${limit}&offset=${offset}`,
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
        if (data.streams.length === 0) {
          return console.log('找不到此遊戲的實況主')
        }
        for (const streamers of data.streams) {
          console.log(streamers._id, streamers.channel.name)
        }
      } catch (err) {
        console.log('錯誤', err)
      }
      if (offset === 0) {
        offset += limit
        getTopStreamers(gameName, limit, offset, total)
      }
    }
  )
}

getTopStreamers(GAME_NAME, LIMIT, 0, TOTAL)
