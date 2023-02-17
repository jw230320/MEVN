const express = require('express')
const loogger = require('morgan')
const app = express()
const port = 3000

/* 1번 로직 */
app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>todo List</title>
        <script src="https://unpkg.com/typeit@8.7.0/dist/index.umd.js"></script>
        <style> @import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap'); 
        :root{
            --bkcolor0:#fae6d1;
            --bkcolor1:#fcd3a6;
            --bkcolor2:#f0ae68;
            --bkcolor3:#ffe4fa;
            --bkcolor4:#d4b8e1;
            --bkcolor5:#d788fe;
            --bkcolor6:#433748;
            --bcolor0:#e6f3ff;
            --bcolor1:#b3d6f7;
            --bcolor2:#60b2ff;
            --bcolor3:#425c75;
            --bcolor4:#d8ffee;
            --bcolor5:#9ffed5;
            --bcolor6:#60ffba;
            --bcolor7:#357157;
    
    
        }
        body, button, input{
            font-family: 'Poor Story', cursive;
        }
        body{
            display: flex;
            justify-content: center;
    
        }
        .container{
            padding: 30px;
            border-radius: 20px;
            background-color: var(--bkcolor3);
            width:100%;
            max-width: 25rem;
            height: auto;
        }
        h1{
            text-align: center;
            margin: 0 0 10px 0;
            color: var(--bcolor7);
        }
        .input-set{
            height: 40px;
            margin-bottom: 7px;
        }
        #new-input{
            color: var(--bcolor7);
            font-size: 1em;
            font-weight: bold;
            margin: 0px;
            padding: 5px;
            width: 75%;
            height: 100%;
            border-radius: 20px 0 0 20px;
            display: inline;
            box-sizing: border-box;
            border: 1px solid rgba(0,0,0,0.5);
        }
        #new-add{
            margin-left: -5px;
            font-size: 1em;
            width: 25%;
            height: 100%;        
            padding: 5px;
            border-radius: 0 20px 20px 0;
            display: inline;
            box-sizing: border-box;
            border: 1px solid rgba(0,0,0,0.5);
            background-color: var(--bcolor1);
        }
        button{
            width: 80px;
            height: 40px;
            margin: 3px;
            font-weight: bold;
            border-radius: 10px;
            background-color: var(--bcolor0);
            border: 1px solid rgba(0,0,0,0.5);
            color: var(--bcolor3);
            font-size: 1em;
        }
        button:hover{
            width: 80px;
            height: 40px;
            margin: 3px;
            font-weight: bold;
            border-radius: 10px;
            background-color: var(--bkcolor6);
            border: 1px solid rgba(0,0,0,0.5);
            color: var(--bcolor0);
            font-size: 1em;
        }
        h2{
            margin: 0;
            /* overflow: hidden; */
            white-space: normal;
            word-wrap: break-word;
        }
        .list-card{
            transition: 1s ease;
            background-color: var(--bcolor1);
            border-radius: 10px;
            color: white;
            max-width:85%;
            height: 45px;
            padding: 10px;
            margin: 0 0 10px 0;
            overflow: hidden;
            /* white-space: normal; */
            /* word-wrap: break-word; */
        }
        .list-card:hover{
            transition: 1s ease;
            background-color: var(--bcolor3);
            border-radius: 10px;
            color: white;
            max-width:100%;
            height: auto;
            padding: 10px;
            margin: 0 0 10px 0;
            overflow: hidden;
            /* white-space: normal; */
            /* word-wrap: break-word; */
        }
        </style>
    <script>
        document.addEventListener("DOMContentLoaded", ()=>{
            const type = document.querySelector('h1')
            new TypeIt(type,{speed:50}).pause(700).move(-6).type('나의 ').go()
        })
    </script>
    
    
    
    
    </head>
    <body>
        <!-- div.container>div.main>h1+div>input#new-input+input#new-add^button#sel-del+button#all-del^div#list -->
        <div class="container">
            <div class="main">
                <h1>할 일 목록</h1>
                <div class="input-set">
                    <input type="text" id="new-input">
                    <input type="button" id="new-add" value="할일추가"></div>
                <button id="sel-del">완료제거</button>
                <button id="all-del">모두제거</button>
            </div>
                <hr>
            <div id="list">
                <div class="list-card">
                    <span>체크</span>
                    <input type="checkbox">
                    <!-- <button>삭제</button> -->
                    <h2>안녕하세요.반가워요.안녕하세요.반가워요.안녕하세요.반가워요.안녕하세요.반가워요.</h2>
                </div>
                <div class="list-card">
                    <span>체크</span>
                    <input type="checkbox">
                    <!-- <button>삭제</button> -->
                    <h2>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h2>
                </div>
            </div>
        </div>
        
    </body>
    </html>`)
  })
app.use(loogger('tiny'))
app.use((req,res,next) => {
    console.log('1 Time: ' ,Date.now())
    next()
})
app.use((req,res,next) => {
    console.log('2 Time: ' ,Date.now())
    next()
})
app.listen(port, () => {
    console.log(`${port} 포트로 접속 완료!!!`)
  })
