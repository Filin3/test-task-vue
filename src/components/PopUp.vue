<template>
  <div class="pop-up">
    <div class="pop-up__container">
      <h3>Регистрация</h3>
      <div class="pop-up__input-container">
        <input type="text" placeholder="Имя" v-model="name" />
        <input type="text" placeholder="Фамилия" v-model="secondName" />
        <input type="text" placeholder="Отчество" v-model="patronymic" />
        <input type="email" placeholder="Почта" v-model="email" />
        <input type="password" placeholder="Пароль" v-model="password" />
      </div>
      <button @click="send()">Отправить</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IUser } from "@/types";

export default defineComponent({
  name: "pop-up",
  emits: {
    userData(payload: IUser) {
      return true;
    },
  },
  data() {
    return {
      name: "",
      secondName: "",
      patronymic: "",
      email: "",
      password: "",
    };
  },
  methods: {
    send() {
      this.$emit("userData", {
        name: this.name,
        secondName: this.secondName,
        patronymic: this.patronymic,
        email: this.email,
        password: this.password,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.pop-up {
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 50%);
  display: flex;
  justify-content: center;
}

.pop-up__container {
  padding: 0.5rem;
  max-width: 500px;
  background-color: rgb(174, 255, 251);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pop-up__input-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
}

@media screen and (min-width: 720px) {
  .pop-up__input-container input:last-child {
    transform: translate(calc(-50% - 0.5rem / 2));
  }
}

@media screen and (max-width: 720px) {
  .pop-up__input-container {
    flex-direction: column;
  }
}
</style>
