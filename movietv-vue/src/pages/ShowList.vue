<template>
    <div>
        <h1>TV Shows</h1>
        <BaseList :element-list="showsList"></BaseList>
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
                showsList: this.$store.getters.tvShows,
            };
        },
        provide() {
            return {
                "elementType": "show",
            };
        },
    }
</script>