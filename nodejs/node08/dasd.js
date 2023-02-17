const { mongoose, o1 } = require('./mongbig.js')
const main = async () => {
  const _data = {
    name: '23',
    time: '123',
    olr: '큰돌'
  }
  console.log(_data)
  const new_photo = new o1(_data)
  console.log(new_photo)
  const t = await new_photo.save()
  console.log(t)
}
main()
