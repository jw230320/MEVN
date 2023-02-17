<template>
  <div id="container">
    <textarea disabled v-model="textarea" id="messages"></textarea>
    <input
      v-model="message"
      autocomplete="off"
      id="input"
      @keyup.enter="sendMessage()"
    />
    <button @click="sendMessage()">전송</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  created() {
    this.$socket.on('chat', (data) => {
      window.scrollTo(0, document.body.scrollHeight)
      this.textarea += data.message + '\n'
    })
  },
  data() {
    return {
      textarea: '',
      message: ''
    }
  },
  methods: {
    sendMessage() {
      this.$socket.emit('chat', { message: this.message })
      this.message = ''
    }
  },
  components: {}
}
</script>
<style scoped>
body {
  margin: 0;
  padding-bottom: 3em;
}
textarea {
  border-radius: 15px 15px 0 0;
  margin-bottom: 0;
  min-height: 400px;
  height: 100%;
  overflow: auto;
  resize: none;
  font-size: 2em;
  color: darkslategrey;
}
#container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
#input {
  border: none;
  padding: 0 16px;
  flex-grow: 1;
  border-radius: 32px;
  margin: 4px;
  border-bottom: 1px solid rgb(86, 73, 73);
  height: 40px;
}
#input:focus {
  outline: none;
}
button {
  background: #333;
  border: none;
  padding: 0.1em;
  margin: 4px;
  border-radius: 5px;
  outline: none;
  color: #fff;
}
</style>
