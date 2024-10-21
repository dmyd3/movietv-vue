<template>
    <div class="card-container" element-pk="{{ element.pk }}">
        <h3>{{ element.title }}</h3>

        <button class="more-info-btn">
            <!-- <router-link :to="{ name: 'movie-info', params: { pk: element.pk } }">More Info</router-link> -->
            <router-link :to="routeLink">More Info</router-link>
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
        inject: ["elementType"],
        computed: {
            routeLink() {
                let infoLink = { params: { pk: this.element.pk } };

                if (this.elementType == 'movie') {
                    infoLink.name = "movie-info";
                } else {
                    infoLink.name = "show-info";
                }

                return infoLink;
            }
        }
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

    button.more-info-btn {
        height: 2em;

        border-radius: 5px;
        border-color: blue;
        border-style: solid;
        border-width: 2px;
        background-color: gray;

        cursor: pointer;
    }
</style>