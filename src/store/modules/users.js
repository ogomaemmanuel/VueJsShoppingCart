const  state = {
    users: [{
        username: "Emmanuel",
        firstName: "Emmanuel",
        lastName: "Ogoma",
        password: "1234",
        role: "Admin",
    }]
};

const getters={
    users:state=>state.users
};
const mutations={
    ADD_USER(state, newuser){
        state.users.push(newuser);
    },
}

const actions={
    addUser(store, newUser){
        store.commit("ADD_USER",newUser);
    }
}


export default {
    state,
    mutations,
    actions,
    getters,
};