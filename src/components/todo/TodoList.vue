<template>
  <section>
    <ul>
      <li v-for="(todoItem, index) in todoItems" :key="todoItem" class="shadow">
        <i class="checkBtn fa fa-check" aria-hidden="true"></i>
        {{ todoItem }}
        <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
          <!-- <i class=""></i> -->
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
const todoItems = ['Udemy 강좌 듣기', 'LeetCode 알고리즘 풀기', '패캠 수업 준비']

export default {
  data() {
    return {
      todoItems: todoItems
    }
  },
  methods: {
    removeTodo(todoItem, index) {
      this.todoItems.splice(index, 1);
    }
  }
}
</script>

<style>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 46px;
    color: #62acde;
    margin-right: 5px;
  }
  .removeBtn {
    line-height: 50px;
    margin-left: auto;
    color: #de4343;
  }
</style>
