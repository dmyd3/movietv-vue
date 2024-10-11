const authModule = {
    namespaced: true,
    state() {
        return {
            currentUser: null,
        };
    },
    getter: {
        currentUser(state) {
            return state.currentUser;
        },
        isLoggedIn(state) {
            return !!state.currentUser;
        }
    },
    mutations: {
        setCurrentUser(state, payload) {
            state.currentUser = payload.userPK;
        },
        logout(state) {
            state.currentUser = null;
        },
    },
    actions: {
        login(context, payload) {
            if (payload.userPK) {
                context.commit('login', payload);
            }
        },
        logout(context) {
            context.commit('logout');
        },
        authenticate(context, payload) {
            if (payload.userPK) {
                localStorage.setItem("currentUser", payload.userPK);
                context.dispatch('login', payload);
            }
        },
        tryLogin(context) {
            // This action will be performed to check if there is a user logged in when the page is first loaded, since VueJS is volatile
            const authenticatedUser = localStorage.getItem("currentUser");

            if (authenticatedUser) {
                const authPayload = {"userPK": authenticatedUser};

                context.dispatch('login', authPayload);
            }
        },
    },
}

export default authModule;