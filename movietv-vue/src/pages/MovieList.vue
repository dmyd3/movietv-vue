<template>
    <h1>Movies</h1>
    <BaseList :element-list="moviesList"></BaseList>
</template>

<script>
    import BaseList from '@/components/BaseList.vue';

    export default {
        components: {
            BaseList,
        },
        data() {
            return {
                moviesList: this.$store.getters.movies,
            };
        },
    }
</script>