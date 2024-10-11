import { createStore } from "vuex";
import authModule from "./auth";

export default createStore({
    modules: {
        auth: authModule,
    },
    state() {
        return {
            users: [
                {
                    pk: "u1",
                    username: "shaun",
                    firstName: "Shaun",
                    lastName: "Rings",
                    movies: [],
                    shows: [],
                },
            ],
            movies: [
                {
                    pk: "m1",
                    title: "Dune Part 2",
                },
                {
                    pk: "m2",
                    title: "Avengers Endgame",
                },
                {
                    pk: "m3",
                    title: "Dungeons & Dragons",
                },
            ],
            tvShows: [],
        };
    },
    getters: {
        movies(state) {
            return state.movies;
        },
        tvShows(state) {
            return state.tvShows;
        },
    },
});