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
  const groupNum = Number(lines[0])
  for (let i = 1; i <= groupNum; i++) {
    const [a, b, k] = lines[i].split(' ')
    console.log(compare(a, b, k))
  }
}

function compare(a, b, k) {
  if (a === b) {
    return 'DRAW'
  }
  if (a.length !== b.length) {
    return (a.length > b.length) ^ (Number(k) === -1) ? 'A' : 'B'
  }
  return (a > b) ^ (Number(k) === -1) ? 'A' : 'B'
}
