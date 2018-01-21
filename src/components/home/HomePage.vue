<template>
    <div>
        <Header></Header>
        <DailyList></DailyList>
    </div>
</template>

<script>
import Header from '../common/Header.vue'
import DailyList from './DailyList.vue'

export default {
    components: {
        DailyList,
        Header
    }
}
</script>

<style>

</style>
