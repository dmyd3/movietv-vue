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
                    description: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
                    runtime: 150,
                    director: "Denis Villeneuve",
                },
                {
                    pk: "m2",
                    title: "Avengers Endgame",
                    description: "Avengers assemble agains Thanos one last time.",
                    runtime: 180,
                    director: "Russo Brothers",
                },
                {
                    pk: "m3",
                    title: "Dungeons & Dragons",
                    description: "A band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
                    runtime: 120,
                    director: "John Francis Daley, Jonathan M. Goldstein",
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