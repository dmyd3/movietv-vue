<template>
    <div>
        <component :is="componentType"></component>
    </div>
</template>

<script>
    import MovieInfo from '../components/MovieInfo.vue';
    import ShowInfo from '@/components/ShowInfo.vue';

    export default {
        props: ['elementType'],
        components: {
            MovieInfo,
            ShowInfo,
        },
        computed: {
            componentType() {
                let value;
                if (this.elementType == "movie") {
                    value = "movie-info";
                }
                else {
                    value = "show-info"; // TV SHOW
                }

                return value;
            }
        },
    }
</script>

<style>
    .info-container {
        color: black;
        margin: 1em 1em;
        padding: 1em;
        border-radius: 20px;
    }

    .info-element {
        border-color: darkblue;
        border-style: solid;
        border-width: 1px;

        width:fit-content;
        padding: 5px;
    }

    .extra-info {
        display: flex;
        flex-direction: row;
        column-gap: 1em;
        justify-content: left;
    }
</style>