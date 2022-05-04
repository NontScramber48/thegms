<template>
  <h1>SIGN IN</h1>
  <br />
  <div>
    <router-link to="/sign-up">
      <button class="p-button-text text-white">Sign up</button>
    </router-link>
    <br /><br />
    <router-link to="/home">
      <button class="p-button-text text-white">Sign in</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "sign-in.component",
};
</script>

<style scoped></style>
