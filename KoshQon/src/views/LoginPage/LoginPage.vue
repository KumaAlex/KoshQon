<template>
  <div class="login">

    <div class="login__left">
      <h2 class="login__left-top">
        Login into your account
      </h2>
      <div class="login__field">
        <label for="number" class="login__name">Phone number</label>
        <input type="tel" name="Phone Number" class="login__inp" pattern="[7-9]{1}[0-9]{9}" v-model="phone">
      </div>
      <div class="login__field">
        <label for="password" class="login__name">Password</label>
        <input type="password" class="login__inp" v-model="password">
      </div>
      <a class="login__forgot-btn">
        Forgot password?
      </a>
      <div class="login__left-bot">
        <button class="login__btn orangeB white" @click="login()">Login now</button>
        <div class="login__dash">
          <div class="login__dash-left"></div>
          <div class="login__dash-center">or</div>
          <div class="login__dash-right"></div>
        </div>
        <router-link to="register" class="login__btn orange">Signup now</router-link>
      </div>
    </div>


    <div class="login__right">
      <LoginBack />
    </div>
  </div>
</template>

<script setup lang="ts">
import LetterIcon from "@/components/icons/LoginIcons/LetterIcon.vue";
import LoginBack from "@/components/icons/LoginIcons/LoginBack.vue";
import PhoneIcon from "@/components/icons/LoginIcons/PhoneIcon.vue";
import LockIcon from "@/components/icons/LoginIcons/LockIcon.vue";
import {validateForm} from "@/services/login"

let phone = '';
let password = '';

function login() {
  validateForm(phone, password);
}

</script>

<style lang="scss" scoped src="./LoginPage.scss">

</style>