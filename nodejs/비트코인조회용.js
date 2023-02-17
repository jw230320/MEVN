const value = ()=>{
    return new Promise((resolve, reject) => {
        const url = 'https://api.upbit.com/v1/ticker?markets=KRW-BTC'
            fetch(url)
            .then((response)=>response.json())
            .then(data=>{
                resolve(data[0])

            })    
    })
}