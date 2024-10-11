<template>
    <div id="sidebar">
        <img alt="Vue logo" src="../assets/logo.png">
        <ul class="sidebar-menu">
            <li class="menu-option">
                <router-link to="/helloworld">
                    Hello World
                </router-link>
            </li>
            <li class="menu-option">
                <router-link to="/main">
                    Main Page
                </router-link>
            </li>
            <li class="menu-option">
                <router-link to="/movies">
                    Movies
                </router-link>
            </li>
            <li class="menu-option">
                <router-link to="/shows">
                    TV Shows
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    #sidebar {
        color: white;
        background-color: purple;
        
        position: relative;

        height: 100%;
        width: 300px;
    }

    ul.sidebar-menu {
        list-style-type: none;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
    }

    .menu-option {
        padding: 5px 0px;
        width: 100%;
        height: 2em;
    }

    .menu-option a[href] {
        display: inline-block;
        height: 100%;
        width: 100%;
        line-height: 2em;
    }

    .menu-option a[href]:hover {
        background-color: rgb(80, 0, 80);
    }

    .menu-option a[href].router-link-active {
        color: greenyellow;
        background-color: black;
    }
</style>