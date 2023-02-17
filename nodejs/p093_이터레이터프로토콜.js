const log = console.log
function* gen() {
  yield 10
  if (false) yield 20 // 건너뜀
  yield 30
  return 90 // 리턴에서 종료, 하단실행 x
  yield 40 // 끝남
}
let iter = gen()
log([...iter])

iter = gen()
for (const a of iter) {
  log(a)
}
