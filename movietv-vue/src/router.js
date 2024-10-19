import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "./pages/HelloWorld.vue";
import MainPage from "./pages/MainPage.vue";
import MovieList from "./pages/MovieList.vue";
import MovieInfo from "./pages/MovieInfo.vue";
// import ElementInfoPage from "./pages/ElementInfoPage.vue";

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
            // TODO: check why it doesnt work
            /*children: [
                { 
                    name: 'movie-info',
                    path: ':pk',
                    component: MovieInfo,
                },
            ]*/
        },
        { 
            name: 'movie-info',
            path: '/movies/:pk',
            component: MovieInfo,
            // component: ElementInfoPage,
            // props: { elementType: "movie"},
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