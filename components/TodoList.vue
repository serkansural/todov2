<template>
  <div class="border border-gray-700 px-3 py-2">
    <template v-for="(item, index) in todoList">
      <div
        :key="item + index"
        class="flex justify-between py-1 px-2"
        :class="{
          'bg-blue-600 text-white': index % 2 === 0
        }"
      >
        <div :class="{ 'line-through': isItemDone(index) }">
          {{ item }}
        </div>
        <div class="inline-flex gap-x-2">
          <div
            class="cursor-pointer bg-red-300 text-white px-3 py-2"
            @click="markAsDone(index)"
          >
            <template v-if="!isItemDone(index)">
              +
            </template>
            <template v-else>
              -
            </template>
          </div>
          <div
            class="cursor-pointer bg-red-300 text-white px-3 py-2"
            @click="deleteItem(index)"
          >
            X
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    todoList () {
      return this.$store.state.todo.todoList
    }
  },
  methods: {
    deleteItem (index) {
      this.$store.commit('todo/deleteItem', { index })
    },
    markAsDone (index) {
      this.$store.commit('todo/markAsDone', { index })
    },
    isItemDone (index) {
      return this.$store.state.todo.listDone.includes(index)
    }
  }
}
</script>

<style></style>
