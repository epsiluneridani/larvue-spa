export default {
  state: {
    user: null,
  	currentUser: localStorage.getItem("currentUser") || null
  },
  mutations: {
  	setCurrentUser: (state, currentUser) => {
        state.currentUser = currentUser;
        state.isLoggedIn = true;
    },
    removeCurrentUser: state => {
        state.currentUser = null;
        state.isLoggedIn = false;
    }
  },
  actions: {
  	setCurrentUser(context, currentUser) {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        context.commit("setCurrentUser", currentUser);
    },
    fetchCurrentUserFromLocalstorage(context) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            context.commit("setCurrentUser", currentUser);
        }
    }
  },
  getters: {
  	isLoggedIn(state) {
        if (state.currentUser === null) {
            return false;
        }
        return state.currentUser.token !== "";
    },
    currentUser(state) {
        return state.currentUser;
    }
  }
}
