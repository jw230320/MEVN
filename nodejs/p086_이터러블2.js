let mp = new Map()
mp.set('사과', '딸기') // 키 값쌍
mp.set('포도', '배')
console.log(mp.get('사과'))
console.log(mp.get('포도'))
console.log(mp)

for (const a of mp) console.log(a)
console.log(Symbol.iterator in mp)
