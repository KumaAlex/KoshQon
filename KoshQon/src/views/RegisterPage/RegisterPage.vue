<template>
  <div class="login">

    <div class="login__left">
      <h2 class="login__left-top">
        Register your account
      </h2>
      <div class="login__field">
        <label class="login__name">Phone number</label>
        <input type="tel" name="Phone Number" class="login__inp" pattern="[7-9]{1}[0-9]{9}" v-model="phone">
        <div class="login__code">
          <div class="code-input">
            <input type="number" class="login__code-num" v-model="code[0]" maxlength="1" @input="moveToNext($event, 0)" ref="input0" @click="clearInput($event)"/>
            <input type="number" class="login__code-num" v-model="code[1]" maxlength="1" @input="moveToNext($event, 1)" ref="input1" @click="clearInput($event)"/>
            <input type="number" class="login__code-num" v-model="code[2]" maxlength="1" @input="moveToNext($event, 2)" ref="input2" @click="clearInput($event)"/>
            <input type="number" class="login__code-num" v-model="code[3]" maxlength="1" @input="moveToNext($event, 3)" ref="input3" @click="clearInput($event)"/>
          </div>

          <button class="login__code-btn orangeB white">send a code</button>
        </div>
      </div>
      <div class="login__field">
        <label class="login__name">Password</label>
        <input type="password" class="login__inp" v-model="password1">
        <input type="password" class="login__inp" v-model="password2">
      </div>

      <div class="login__field-hor">
        <div class="login__field">
          <label class="login__name">Name</label>
          <input type="text" name="Name" class="login__inp login__inp-hor" v-model="name">
        </div>
        <div class="login__field">
          <label class="login__name">Surname</label>
          <input type="text" name="SurName" class="login__inp login__inp-hor" v-model="surname">
        </div>
      </div>
      <div class="login__field-hor">
        <div class="login__field">
          <label class="login__name">Gender</label>
          <select name="Gender" class="login__inp login__inp-hor" v-model="gender">
            <option value="male" class="login__inp">male</option>
            <option value="female" class="login__inp">female</option>
            <option value="another gender" class="login__inp">another gender</option>
            <option value="croissant" class="login__inp">croissant</option>
          </select>
        </div>
        <div class="login__field">
          <label class="login__name">City</label>
          <select name="City" class="login__inp login__inp-hor">
            <option value="Almaty" class="login__inp">Almaty</option>
            <option value="Astana" class="login__inp">Astana</option>
            <option value="Pavlodar" class="login__inp">Pavlodar</option>
            <option value="Karaganda" class="login__inp">Karaganda</option>
          </select>
        </div>
      </div>

      <div class="login__left-bot">
        <button class="login__btn orangeB white" @click="validate()">Register now</button>
        <div class="login__dash">
          <div class="login__dash-left"></div>
          <div class="login__dash-center">or</div>
          <div class="login__dash-right"></div>
        </div>
        <router-link to="login" class="login__btn orange">Already have an account</router-link>
      </div>
    </div>


    <div class="login__right">
      <LoginBack />
    </div>

  </div>
</template>

<script lang="js">
import LoginBack from "@/components/icons/LoginIcons/LoginBack.vue";
import {validateForm} from "@/services/register.ts";

export default {
  components: {LoginBack},
  data() {
    const code = ['', '', '', ''];
    let phone;
    let password1;
    let name;
    let password2;
    let surname;
    let gender;
    return {
      code,
      phone,
      password1,
      password2,
      name,
      surname,
      gender
    }
  },
  methods: {
    validate() {
      if (this.phone && this.password1 === this.password2 && this.name && this.surname) validateForm(this.phone, this.password1, this.name, this.surname, this.gender);
    },
    moveToNext(event, index) {
      if (event.target.value.length === 1) {
        if (index < 3) {
          this.$refs[`input${index + 1}`].focus();
        } else {
          setTimeout(() => {
            this.$refs[`input${index}`].blur();
          }, 0);
        }
      }
    },
    clearInput(event) {
      this.code = ['', '', '', ''];
      this.$refs[`input${0}`].focus();
    }
  },
}
</script>

<style lang="scss" scoped src="./RegisterPage.scss">
</style>
<style lang="scss" scoped src="../LoginPage/LoginPage.scss">
</style>