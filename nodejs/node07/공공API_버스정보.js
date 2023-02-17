require('dotenv').config()

const request = require('request')
const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser')
const parser = new XMLParser()
const url_bus =
  'http://apis.data.go.kr/6260000/BusanBIMS/busStopArrByBstopidLineid?bstopid=505780000&%20lineid=5200179000&serviceKey=Wy5esMWlp0ZZMsHyS7nRz%2Fnis8VrI9Ly4GO1WLWyuN7uFqfyyMN9Rjx1at8uCihOC%2FoRJG4Y76CqEKAtVKOw1g%3D%3D'

function bus() {
  request(url_bus, (e, res, body) => {
    const rst = parser.parse(body)
    const _ = rst.response.body.items.item
    console.log(_)
    console.log(`${_.lineno}번 버스가 ${_.min1}분 뒤에 도착합니다`)
  })
}
bus()
