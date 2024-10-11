<template>
    <div v-if="isAuthenticated">
        INFO about USER and watched movies
    </div>
    <div v-else>
        You Should Login
    </div>
</template>

<script>
    export default {
        computed: {
            isAuthenticated() {
                return this.$store.getters['auth/isLoggedIn'];
            }
        }
    }
</script>

<style></style>