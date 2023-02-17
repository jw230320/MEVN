<template>
  <div>일반적인 체크박스.</div>
  <input type="checkbox" id="inHtml" value="HTML" v-model="chkData" />
  <label for="inHtml">HTML</label>
  <input type="checkbox" id="inCSS" value="CSS" v-model="chkData" />
  <label for="inCSS">CSS</label>
  <input
    type="checkbox"
    id="inJavascript"
    value="Javascript"
    v-model="chkData"
  />
  <label for="inJavascript">Javascript</label>

  <div v-if="chkData.length !== 0">선택하신 내용은 : {{ chkData }}</div>
  <hr />
  <div>v-for로 체크박스를 만드시오.</div>
  <span v-for="chk in chkList" :key="chk">
    <input type="checkbox" :id="chk" :value="chk" v-model="chkData2" />
    <label :for="chk">{{ chk }}</label>
  </span>
  <div v-if="chkData2.length !== 0">선택하신 내용은 : {{ chkData2 }}</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      chkData: [],
      chkData2: [],
      chkList: ['HTML', 'CSS', 'JavaScript', 'Vuejs', 'Nodejs', 'JSON']
    }
  },
  methods: {}
}
</script>

<style></style>
