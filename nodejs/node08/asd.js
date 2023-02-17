const axios = require('axios')
const cheerio = require('cheerio')

const url_lotto =
  'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EB%A1%9C%EB%98%90%EB%B2%88%ED%98%B8'

function lo() {
  console.log('실행')
  axios.get(url_lotto).then((res) => {
    let $ = cheerio.load(res.data)
    let b = []
    console.log('실행')

    $('.ball').each(function () {
      b.push($(this).text())
    })
    console.log(b)
    let a = b.join(',')
    console.log('당첨번호는 ' + a)
  })
}
lo()
