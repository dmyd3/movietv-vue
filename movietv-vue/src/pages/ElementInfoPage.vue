<template>
    <component :is="componentType"></component>
</template>

<script>
    import MovieInfo from '../components/MovieInfo.vue';

    export default {
        props: ['elementType'],
        components: {
            MovieInfo
        },
        computed: {
            componentType() {
                let value;
                if (this.elementType == "movie") {
                    value = "movie-info";
                }
                else {
                    value = "MovieInfo"; // TV SHOW
                }

                return value;
            }
        },
    }
</script>

<style>
    .info-container {
        color: black;
        background-color: rgb(160, 160, 160);
        
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