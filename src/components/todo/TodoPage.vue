<template>
  <div>
    <Header></Header>
    <TodoList></TodoList>
  </div>
</template>

<script>
import Header from '../common/Header.vue'
import TodoList from './TodoList.vue'

export default {
    components: {
        Header,
        TodoList
    }
}
</script>

<style>

</style>
