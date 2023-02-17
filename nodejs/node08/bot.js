require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const token = process.env.botid
const bot = new TelegramBot(token, { polling: true })
const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request')
const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser')
const parser = new XMLParser()

const url_gong =
  'http://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=Wy5esMWlp0ZZMsHyS7nRz%2Fnis8VrI9Ly4GO1WLWyuN7uFqfyyMN9Rjx1at8uCihOC%2FoRJG4Y76CqEKAtVKOw1g%3D%3D&pageNo=1&numOfRows=10&resultType=json'
//봇id
// let chatid1 = 5710135831

//공기질 함수
function a() {
  request(url_gong, (e, res, body) => {
    const rst = JSON.parse(body)
    const _ = rst.getAirQualityInfoClassifiedByStation.body.items.item[2]
    bot.sendMessage(
      chatid1,
      `[${_.site}]\n초미세먼지:${_.pm25}\n 미세먼지:${_.pm10}\n`
    )
  })
}
a()

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

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = match[1]
  bot.sendMessage(chatId, resp)
})
