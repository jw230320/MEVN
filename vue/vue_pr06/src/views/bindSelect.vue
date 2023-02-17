<template>
  <div>
    <select name="" id="" v-model="selData">
      <option value="051">부산</option>
      <option value="02">서울</option>
      <option value="064">제주</option>
      <option value="055">창원</option>
      <option value="053">대구</option>
    </select>
    <span>{{ selData }}</span>
  </div>
  <hr />
  <div>
    <select name="" id="" v-model="selData2">
      <option v-for="sel in selList2" :key="sel" :value="sel.num">
        {{ sel.city }}
      </option>
    </select>
    <div>{{ selData2 }}</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      selData: '고르세요.',
      selData2: '',
      selList2: [
        { num: '051', city: '부산' },
        { num: ' 02', city: '서울' },
        { num: '064', city: '제주' },
        { num: '055', city: '창원' },
        { num: '053', city: '대구' }
      ]
    }
  },
  methods: {}
}
</script>

<style></style>
