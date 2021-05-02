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
  for (let i = 1; i < lines.length; i++) {
    console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite')
  }
}

function isPrime(n) {
  if (n === 1) {
    return false
  }
  for (let i = 2; i <= n - 1; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
