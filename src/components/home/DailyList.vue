<template>
  <section>
    <ul>
      <li v-for="(day, index) in days" :key="day" class="shadow">
        {{ day }}
        <span class="moveBtn" type="button" @click="routeDay">
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
const days = [
  '2018.01.18',
  '2018.01.17',
  '2018.01.6',
]

export default {
  data() {
    return {
      days: days
    }
  },
  methods: {
    routeDay() {
      this.$router.push('day');
    }
  }
}
</script>

<style scoped>
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
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .moveBtn {
    margin-left: auto;
    color: #7b8894;
  }
</style>
