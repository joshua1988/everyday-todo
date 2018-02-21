<template>
  <section class="root-el">
    <ul>
      <li v-for="(dayList, index) in dayLists" :key="index" class="shadow" @click="routeDay">
        {{ dayList.day }}
        <span class="remainedTag">{{ dayList.remainedItems }}</span>
        <span class="moveBtn" type="button">
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
const dayLists = [
  { day: '2018.01.18', remainedItems: 3},
  { day: '2018.01.17', remainedItems: 1},
  { day: '2018.01.6', remainedItems: 4}
]

export default {
  data() {
    return {
     dayLists: dayLists
    }
  },
  methods: {
    routeDay() {
      this.$router.push('day');
    }
  },
  computed: {

  }
}
</script>

<style scoped>
  /* newly added */ 

  /* old */
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
  .remainedTag {
    padding: 0 7px;
    border-radius: 4px;
    border-color: transparent;
    background-color:#FFED78;
    margin: 0.8rem 0.3rem;
    line-height: 1.8rem;
    color: #FEFFEA;
    font-size: 0.9rem;
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
