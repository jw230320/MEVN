<template>
  <div class="join-main">
    <form action="" class="join-form">
      <input type="text" placeholder="닉네임" class="nickname" /><br />
      <button type="button" class="ip-bt">입장</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.join-main {
  background: olive;
  width: 100%;
  height: 500px;
}
.join-form {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.nickname {
  width: 500px;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-bottom: 2px solid gray;
  padding-left: 10px;
  margin: 10px;
}
.ip-bt {
  width: 100px;
  height: 30px;
  border: 0;
  border-radius: 15px;
  background: aquamarine;
}
.ip-bt:hover {
  background: bisque;
  transition: 0.7s;
}
</style>
