<template>
  <div>
    <button
      @click="page = p"
      v-for="p in pages"
      :key="p"
      :class="{ active: page == p }"
    >
      {{ p }}
    </button>
    <div v-for="(g, i) in pages" :key="i">
      <div v-if="g == page">{{ g }}</div>
      <img
        v-if="g == page"
        :src="'../../sample' + (i + 1) + '.jpg'"
        alt=""
        srcset=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      page: 'page1',
      pages: ['page1', 'page2', 'page3', 'page4']
    }
  },
  methods: {}
}
</script>

<style scoped>
button {
  scale: 200%;
  background-color: #fff;
  border: 1px solid gray;
  margin: 30px;
  cursor: pointer;
}
button:hover {
  background: #dff444;
}
button.active {
  color: #fff;
  background: #380d68;
}
img {
  width: 50%;
  height: 50%;
}
</style>
