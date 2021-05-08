const request = require('request')

const GAME_NAME = process.argv[2]

// rec[2][100] => rec[0][*] 1~100     rec[1][*] 101~200
const rec = []
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 100; j++) {
    rec[i] = []
  }
}

// rec[0]  rec[1]
const done = [0, 0]
let noData = false

function getStreams(gameName, limit = 100, offset = 0, flag) {
  let count = 0
  if (!gameName && count === 0) {
    return console.log('請輸入遊戲名稱')
  }
  request(
    {
      url: `https://api.twitch.tv/kraken/streams?game=${GAME_NAME}&limit=${limit}&offset=${offset}`,
      headers: {
        'Client-ID': '22oz51wyck39x2mxtu7m8k5s3yzhzz',
        Accept: 'application/vnd.twitchtv.v5+json'
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
          noData = true
          return console.log('找不到此遊戲的實況主')
        }
        for (const streamers of data.streams) {
          rec[flag][count] = (`${streamers._id} ${streamers.channel.name}`)
          count += 1
        }
        done[flag] = 1
      } catch (err) {
        console.log('錯誤', err)
      }
    })
}

// check() -> check()

function check() {
  setTimeout(() => {
    if (done[0] + done[1] === 2) {
      for (let i = 0; i < rec.length; i++) {
        for (let j = 0; j < 100; j++) {
          console.log(rec[i][j])
        }
      }
    // 避免找不到或是沒輸入程式一直執行 check()
    } else if (noData || !GAME_NAME) {
      return false
    } else {
      check()
    }
  })
}

getStreams(GAME_NAME, 100, 0, 0)
getStreams(GAME_NAME, 100, 100, 1)

check()
