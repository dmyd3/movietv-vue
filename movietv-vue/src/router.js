import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "./pages/HelloWorld.vue";
import MainPage from "./pages/MainPage.vue";
import MovieList from "./pages/MovieList.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'hello-world',
            path: '/helloworld',
            component: HelloWorld,
            props: {
                msg: "Hello World",
            },
        },
        { path: '/', redirect: '/main' },
        { 
            name: 'main',
            path: '/main',
            component: MainPage,
        },
        { 
            name: 'movies',
            path: '/movies',
            component: MovieList,
            children: [
                { 
                    name: 'movie-info',
                    path: ':pk',
                    // component: MovieInfo,
                },
            ]
        },
        { 
            name: 'shows',
            path: '/shows',
            // component: TVShowsList,
        },
        { path: '/:notFound(.*)', redirect: '/' }
    ],
});

export default router;