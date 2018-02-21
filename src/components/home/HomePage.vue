<template>
    <div class="root-el">
        <DailyList></DailyList>
        <HomeFooter></HomeFooter>
    </div>
</template>

<script>
import DailyList from './DailyList.vue'
import HomeFooter from './HomeFooter.vue'

export default {
    components: {
        DailyList,
        HomeFooter
    }
}
</script>

<style>

</style>
