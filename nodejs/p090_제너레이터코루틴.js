const log = console.log
function* map(f, list) {
  for (const a of list) {
    yield f(a)
  }
}
const add = (a) => a + 10
const a = [1, 2, 3, 4, 5]
const cg = map(add, a)
log(cg.next())
log('딴짓하기 1')
log(cg.next())
log('딴짓하기 2')
log(cg.next())
log('딴짓하기 3')
log(cg.next())
log('딴짓하기 4')
log(cg.next())
log('딴짓하기 5')
log(cg.next())
