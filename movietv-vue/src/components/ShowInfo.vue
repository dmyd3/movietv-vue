<template>
    <ElementInfo type="movie">
        <template v-slot:type-info>
            <h4>TV Show Info:</h4>
            <div class="extra-info">
                <div class="info-element">
                    <a>Season/s:</a>
                    <p>{{ showSeasons }} season/s</p>
                </div>

                <div class="info-element">
                    <a>Status:</a>
                    <p>{{ showStatus }}</p>
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
            const shows = computed(() => store.getters.tvShows);
            const showPK = route.params.pk;
            let showObj = reactive();

            // Finding movie object and providing to child components
            // provide method chosen to exemplify Composition API
            const findShow = (showPK) => {
                showObj = shows.value.find(movie => movie.pk == showPK );
            };
            findShow(showPK);
            provide("elementObj", showObj);

            // Getting the provided color from root App.vue
            const showColor = inject("showColor");
            onMounted(()=> {
                // Setting the color as a CSS variable
                document.documentElement.style.setProperty(
                    "--info-bg", showColor
                );
            });

            return {
                "showSeasons": showObj.seasons,
                "showStatus": showObj.status,
            };
        },
    }
</script>
