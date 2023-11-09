import { createStore } from "vuex";
import { IUser } from "@/types";

export default createStore({
  state: {
    users: [] as IUser[],
  },
  mutations: {
    addUser(state, payload: IUser) {
      state.users.push(payload);
    },
  },
});
