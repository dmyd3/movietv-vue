<template>
    <div class="card-container" element-pk="{{ element.pk }}">
        <h3>{{ element.title }}</h3>

        <button>
            <!-- <router-link>MoreInfo</router-link> -->
            More Info
        </button>
    </div>
</template>

<script>
    export default {
        props: ["element"],
        data() {
            return {
                cardWidth: '400px',
            };
        },
    }
</script>

<style scoped>
    .card-container {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: v-bind(cardWidth);

        width: v-bind(cardWidth);
        max-width: v-bind(cardWidth);
        height: 100px;
        margin: 10px;

        border-radius: 10px;
        border-color: red;
        border-style: solid;
        border-width: 3px;
    }

    button {
        height: 2em;

        border-radius: 5px;
        border-color: blue;
        border-style: solid;
        border-width: 2px;

        cursor: pointer;
    }
</style>