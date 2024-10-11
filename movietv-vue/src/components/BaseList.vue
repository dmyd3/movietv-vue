<template>
    <div class="element-list">
        <ListCard
            v-for="element in elementList"
            :key="element.pk"
            :element="element"
        ></ListCard>
    </div>
</template>

<script>
    import ListCard from './ListCard.vue';
    export default {
        props: ["elementList"],
        components: {
            ListCard,
        },
    }
</script>

<style scoped>
    .element-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
</style>