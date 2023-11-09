<template>
  <div class="user-view">
    <div
      class="user-view__container"
      v-for="({ name, secondName, patronymic, email, password }, key) in users"
      :key="key"
    >
      <p>Имя: {{ name }}</p>
      <p>Фамилия: {{ secondName }}</p>
      <p>Отчество: {{ patronymic }}</p>
      <p>Почта: {{ email }}</p>
      <p>Пароль: {{ password }}</p>
      <p>{{ JSON.stringify(users[key]) }}</p>
    </div>
    <PopUp v-if="popUpToggle" @user-data="popUpHandle"></PopUp>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IUser } from "@/types";
import PopUp from "@/components/PopUp.vue";

export default defineComponent({
  name: "user-view",
  components: {
    PopUp,
  },
  data() {
    return {
      popUpToggle: true,
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    popUpHandle(payload: IUser) {
      this.$store.commit("addUser", payload);
      this.popUpToggle = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.user-view {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.user-view__container {
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 50%);
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
}
</style>
