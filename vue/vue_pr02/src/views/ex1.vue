<template>
  <div class="ex1">
    <h1>1. 디렉티브 사용하기</h1>
    <h3>변수 머스타치 사용하기</h3>
    <h1>안녕하세요. {{ vname }} 반갑습니다. {{ age }} 살 입니까?</h1>
    <hr />
    <h3>v-on 기능 사용하기</h3>
    <button v-on:click="func('안녕 팝업이야.')">클릭버튼</button>
    <button @dblclick="func('안녕 또 팝업이야.')">더블클릭버튼</button>
    <hr />
    <h3>v-if 조건문</h3>
    <h1 v-if="status">제가 보이나요?</h1>
    <h1 v-show="status">제가 보이나요?</h1>
    <button v-on:click="status = true">보이게 할께요.</button>
    <button v-on:click="status = false">숨길께요.</button>
    <button v-on:click="status = !status">보이면 숨기고 안보이면 보이게</button>
    <hr />
    <h3>v-model 양방향데이터</h3>
    <input
      type="text"
      v-model="inData"
      v-on:keyup="func(inData + '적고손땜요!')"
    />
    <input
      type="text"
      v-model="inData"
      v-on:keyup.enter="func(inData + '엔터침요!')"
    />
    <h2>{{ inData }}</h2>
  </div>
  <hr />
  <h3>v-for 사용하기</h3>
  <h4>배열:{{ arrData }}</h4>
  <button v-on:click="add">추가하기</button>
  <button v-on:click="sub">삭제하기</button>

  <ul>
    <li v-for="data in arrData" :key="data">{{ data }}</li>
  </ul>
  <br />
  <p>추가한 값 : {{ anum }}</p>
  <p>삭제한 값 : {{ dnum }}</p>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      vname: '홍길동',
      age: 20,
      status: false,
      inData: '',
      arrData: [1, 2, 3, 4, 5],
      dnum: '',
      anum: ''
    }
  },
  methods: {
    func: function (text) {
      alert(text)
    },
    add: function () {
      this.arrData.push(this.arrData.length + 1)
      this.anum = this.arrData.length
      this.dnum = ''
    },
    sub: function () {
      this.dnum = this.arrData.pop()
      this.anum = ''
    }
  }
}
</script>

<style>
/* ul{
  display: flex;
  margin: 0;} */

li {
  float: left;
  margin: 0 20px 0 10px;
  /* position: relative; */
}
/* li>text {
    margin-left: -10px;  } */

button,
input {
  margin: 0 10px;
}
</style>
