<template>
    <ElementInfo type="movie">
        <template v-slot:type-info>
            <h4>Movie Info:</h4>
            <div class="extra-info">
                <div class="info-element">
                    <a>Runtime:</a>
                    <p>{{ movieRuntime }} minutes</p>
                </div>

                <div class="info-element">
                    <a>Director:</a>
                    <p>{{ movieDirector }}</p>
                </div>
            </div>
        </template>
    </ElementInfo>
</template>

<script>
    import ElementInfo from '@/components/ElementInfo.vue';
    import { computed, inject, onMounted, provide, reactive } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';

    export default {
        components: {
            ElementInfo,
        },
        setup() {
            const route = useRoute();
            const store = useStore();
            const movies = computed(() => store.getters.movies);
            const moviePK = route.params.pk;
            let movieObj = reactive();

            // Finding movie object and providing to child components
            // provide method chosen to exemplify Composition API
            const findMovie = (moviePK) => {
                movieObj = movies.value.find(movie => movie.pk == moviePK );
            };
            findMovie(moviePK);
            provide("elementObj", movieObj);

            // Getting the provided color from root App.vue
            const movieColor = inject("movieColor");
            onMounted(()=> {
                // Setting the color as a CSS variable
                document.documentElement.style.setProperty(
                    "--movie-bg", movieColor
                );
            });

            return {
                "movieRuntime": movieObj.runtime,
                "movieDirector": movieObj.director,
            };
        },
    }
</script>

<style>
    body {
        background-color: var(--movie-bg);
    }
</style>
