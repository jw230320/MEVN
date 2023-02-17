const f1 = (obj) => {
  obj = null
}
let b1 = { a: 1 }
f1(b1)
console.log(b1)

const f2 = (array) => {
  array = null
}
let b2 = []
let a2 = b2
f2(b2)
console.log(b2)

const swap = (a, b) => {
  let temp = a
  a = b
  b = temp
}
let x = 1
let y = 2
swap(x, y)
console.log(x, y)

const a = { a: 1 }
const b = (c) => {
  c.a = 2
}
b(a)
console.log(a)
