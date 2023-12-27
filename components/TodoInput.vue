<template>
  <div
    class="flex justify-between border border-gray-500 max-w-[350px] px-3 py-2"
  >
    <input
      v-model="todoText"
      type="text"
      class="border border-gray-500 rounded-sm appearance-none"
    >
    <div
      class="rounded-sm bg-blue-600 text-white px-2 cursor-pointer"
      @click="addTodoItem"
    >
      Ekle
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todoText: ''
    }
  },
  methods: {
    addTodoItem () {
      if (!this.todoText) {
        return
      }
      this.$store.commit('todo/addItem', { text: this.todoText })
      this.todoText = ''
    }
  }
}
</script>

<style></style>
