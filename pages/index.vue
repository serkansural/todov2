<template>
  <div>
    Sayfa 1
    <TodoInput />
    <hr>
    <TodoList />
  </div>
</template>

<script>
import TodoInput from '~/components/TodoInput.vue'
import TodoList from '~/components/TodoList.vue'
export default {
  name: 'IndexPage',
  components: {
    TodoInput,
    TodoList
  },
  layout: 'default'
}
</script>
