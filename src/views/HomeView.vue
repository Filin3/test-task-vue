<template>
  <div class="home-view">
    <button @click="$router.push('/user')">Начать</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "home-view",
});
</script>

<style lang="scss" scoped>
.home-view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
</style>
