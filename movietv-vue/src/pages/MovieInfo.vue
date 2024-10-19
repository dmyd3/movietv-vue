<template>
    <ElementInfo type="movie">
        <template v-slot:type-info>
            <h4>TODO: moview specific info like runtime</h4>
        </template>
    </ElementInfo>
</template>

<script>
import ElementInfo from '@/components/ElementInfo.vue';
import { computed, provide, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
    components: {
        ElementInfo,
    },
    // ...mapGetters({
    //     getMovies: 'movies',
    // }),
    setup() {
        const route = useRoute();
        const store = useStore();
        const movies = computed(() => store.getters.movies);
        const moviePK = route.params.pk;
        let movieObj = reactive();

        const findMovie = (moviePK) => {
            movieObj = movies.value.find(movie => movie.pk == moviePK );
        };
        findMovie(moviePK);

        console.log("qqqqqqqqq")

        provide("elementObj", movieObj);
    },
}
</script>