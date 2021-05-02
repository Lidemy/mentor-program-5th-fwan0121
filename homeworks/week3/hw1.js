const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  const n = Number(lines[0])
  for (let row = 1; row <= n; row++) {
    let result = ''
    for (let i = 1; i <= row; i++) {
      result += '*'
    }
    console.log(result)
  }
}
