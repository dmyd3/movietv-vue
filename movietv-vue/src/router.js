import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
import MovieList from "./pages/MovieList.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'hello-world',
            path: '/helloworld',
            component: HelloWorld,
            props: {
                msg: "aaaaaa",
            },
        },
        { path: '/', redirect: '/main' },
        { 
            name: 'main',
            path: '/main',
            // component: MainPage,
        },
        { 
            name: 'movies',
            path: '/movies',
            component: MovieList,
        },
        { 
            name: 'shows',
            path: '/shows',
            // component: TVShowsList,
        },
    ],
});

export default router;