const log = console.log
function* get() {
  yield 10
  if (false) yield 20 // 건너뜀
  yield 30
  return 90 // 리턴에서 종료, 하단실행 x
  yield 40 // 끝남
}
/* 방법1 */
// let iter = get()
// console.log(iter)
// log(iter.next())
// log(iter.next())
// log(iter.next())
// log(iter.next())

// Object [Generator] {}
// { value: 10, done: false }
// { value: 30, done: false }
// { value: 90, done: true }
// { value: undefined, done: true }

/* 방법2 */
console.log(...get()) //결과물반환 10 30
