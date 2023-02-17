const request = require('request')

const url =
  'http://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=Wy5esMWlp0ZZMsHyS7nRz%2Fnis8VrI9Ly4GO1WLWyuN7uFqfyyMN9Rjx1at8uCihOC%2FoRJG4Y76CqEKAtVKOw1g%3D%3D&pageNo=1&numOfRows=10&resultType=json'

console.log(url)
function a() {
  request(url, (e, res, body) => {
    const rst = JSON.parse(body)
    const _ = rst.getAirQualityInfoClassifiedByStation.body.items.item[2]
    console.log(_)
    console.log(
      `[${_.site}]\n 일산화탄소:${_.co}\n 오존:${_.o3}\n 초미세먼지:${_.pm25}\n 미세먼지:${_.pm10}\n`
    )
  })
}
a()
a()
