<template>
    <div>
        <h1>Movies</h1>
        <BaseList :element-list="moviesList"></BaseList>
    </div>
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
        provide() {
            return {
                "elementType": "movie",
            };
        },
    }
</script>