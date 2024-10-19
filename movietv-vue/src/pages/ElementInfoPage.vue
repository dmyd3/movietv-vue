<template>
    <component :is="componentType"></component>
</template>

<script>
    export default {
        props: ['elementType'],
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
</style>