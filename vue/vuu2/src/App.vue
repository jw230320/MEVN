<template> 
    <nav :class="{main_nav: scrollPosition < 20, main_navdown: scrollPosition > 20}" ref="nav">
          <div class="nav_log">
              <a href="#">회사이름</a>
          </div>
          <ul class="nav_cate" ref="cate">
              <li>Home</li>
              <li>asdas</li>
              <li>asdoa</li>
              <li>asdasd</li>
              <li>sadofk</li>
          </ul>
          
          <a href='#' class="nav_togle" @click="tog()">
              <i class="fa-solid fa-bars"></i>
          </a>
      </nav>
      
      <router-view/>
  </template>
  
  <style>
            body{
                margin: 0;
            }
            
            .main_nav{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                position:fixed;
                color: white
            }
            .main_navdown{
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: white;
                width: 100%;
                position:fixed;
                color:black;
            }
            .nav_log a{
                padding: 12px 8px;
                font-size: 25px;
                text-decoration: none;
                color: inherit;
                
            }
            .nav_cate {
                display: flex;
                list-style: none;
                padding: 0;
            }
            .nav_cate li{
                font-size: 20px;
                padding: 12px 8px;
                cursor: pointer;
    
            }
            .nav_cate li:hover{
                background-color: orange;
                border-radius: 4px;
            }
            
            .nav_togle{
                display: none;
                   position: absolute;
                   right: 20px;
                   font-size: 24px;
                   color: rgb(216, 125, 125);
                   padding: 2px;
            }
            @media (max-width:700px){
            .main_nav{
                    display: flex;
                    flex-direction: column;
                    align-items: self-start;
                    /* background-color: gray; */
                }
                .main_navdown{
                display: flex;
                flex-direction: column;
                background-color: white;
                width: 100%;
                /* position:fixed; */
                color:black;
            }
                .nav_cate{
                    display: none;
                    flex-direction: column;
                    text-align: center;
                    width: 100%;
                    /* background-color: gray; */
                }
                
                .nav_togle{
                    display: block;
                }
                .nav_cate.active{
                    display: flex;
                    background-color: white;
                    width: 100%;
                    color: black;
                }
                .main_nav.active{
                    background-color:white ;
                    color: black;
                    width: 100%;
                }        
        } 
  </style>
  <script>
  /* eslint-disable */
  export default{
    name:'app',
    data(){
        return{
            scrollPosition: null
        }
  
    },
    methods:{
      tog : function(){
        this.$refs.cate.classList.toggle('active')
        this.$refs.nav.classList.toggle('active')   
      },
      updateScroll(){
           this.scrollPosition = window.scrollY
        }
    },
    mounted(){
        window.addEventListener('scroll', this.updateScroll);
    },
      
  
  
    }
  
  
  </script>