<template>
  <div>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoInput from '../todo/TodoInput.vue'
import TodoList from '../todo/TodoList.vue'

export default {
  components: {
    TodoInput,
    TodoList 
  }
}
</script>

<style>

</style>
