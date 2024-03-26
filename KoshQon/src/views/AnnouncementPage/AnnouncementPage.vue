<template>
  <div class="announcement">
    <div class="announcement__type">
      <button class="announcement__type__btn" :class="{ 'active': activeType === `without-house` }"
              @click="toggleType('without-house')">Without Housing
      </button>
      <button class="announcement__type__btn" :class="{ 'active': activeType === `with-house` }"
              @click="toggleType('with-house')">With Housing
      </button>
    </div>
    <transition name="nested">
      <div class="announcement__content" v-show="activeType === 'with-house'">
        <h2 class="announcement__content__top">House Description</h2>
        <div class="announcement__fields">
          <div class="login__field">
            <label for="city" class="login__name">City</label>
            <input v-model="city" type="text" name="" class="login__inp">
          </div>
          <div class="login__field">
            <label for="area" class="login__name">Area</label>
            <input v-model="area" type="text" name="" class="login__inp">
          </div>
          <div class="login__field">
            <label for="street" class="login__name">Street</label>
            <input v-model="street" type="text" name="" class="login__inp">
          </div>
          <div class="login__field">
            <label for="house_number" class="login__name">House Number</label>
            <input v-model="house_number" type="number" name="" class="login__inp">
          </div>
          <div class="login__field">
            <label for="type" class="login__name">Type: House/Apartment</label>
            <select v-model="type" class="login__inp">
              <option value="apartment" class="login__inp">apartment</option>
              <option value="house" class="login__inp">house</option>
            </select>
          </div>
          <div class="login__field">
            <label for="number_of_rooms" class="login__name">Number Of Rooms</label>
            <input v-model="number_of_rooms" type="number" name="" class="login__inp">
          </div>
          <div class="login__field">
            <label for="square" class="login__name">Square</label>
            <input v-model="square" type="number" name="" class="login__inp">
          </div>
          <div class="login__field">
            <label for="floor" class="login__name">Floor</label>
            <input v-model="floor" type="number" name="" class="login__inp">
          </div>
          <div class="login__field">
            <label for="house_condition" class="login__name">House condition</label>
            <input v-model="house_condition" type="text" name="" class="login__inp">
          </div>
          <div class="login__field">
            <label for="bathroom" class="login__name">Bathroom</label>
            <input v-model="bathroom" type="text" name="" class="login__inp">
          </div>
          <div class="login__field">
            <label for="internet" class="login__name">Internet</label>
            <input v-model="internet" type="text" name="" class="login__inp">
          </div>
          <div class="login__field">
            <label for="house_description" class="login__name">House Description</label>
            <input v-model="house_description" type="text" name="" class="login__inp">
          </div>

        </div>
      </div>
    </transition>


    <div class="announcement__content">
      <h2 class="announcement__content__top">Preferred Roommate</h2>
      <div class="announcement__fields">
        <div class="login__field">
          <label for="min_age" class="login__name">Minimal Age</label>
          <input v-model="min_age" type="number" name="" class="login__inp">
        </div>
        <div class="login__field">
          <label for="max_age" class="login__name">Maximal Age</label>
          <input v-model="max_age" type="number" name="" class="login__inp">
        </div>
        <div class="login__field">
          <label for="gender" class="login__name">Gender</label>
          <input v-model="gender" type="text" name="" class="login__inp">
        </div>
        <div class="login__field">
          <label for="min_budget" class="login__name">Minimal Budget</label>
          <input v-model="min_budget" type="number" name="" class="login__inp">
        </div>
        <div class="login__field">
          <label for="min_stay_time" class="login__name">Minimal Duration Stay</label>
          <input v-model="min_stay_time" type="text" name="" class="login__inp">
        </div>
        <div class="login__field">
          <label for="min_mate_amount" class="login__name">Minimal Roommate Amount</label>
          <input v-model="min_mate_amount" type="number" name="" class="login__inp">
        </div>
        <div class="login__field">
          <label for="max_mate_amount" class="login__name">Maximal Roommate Amount</label>
          <input v-model="max_mate_amount" type="number" name="" class="login__inp">
        </div>
        <div class="login__field">
          <label for="description" class="login__name">Addition information</label>
          <input v-model="mate_description" type="text" name="" class="login__inp">
        </div>


      </div>
    </div>

    <button class="announcement__btn btn">
      SUBMIT
    </button>

  </div>
</template>

<script lang="ts">
import {ref} from "vue";

export default {

  data() {
    return {
      activeType: 'without-house',
      min_age: null,
      max_age: null,
      gender: null,
      min_budget: null,
      min_stay_time: null,
      min_mate_amount: null,
      max_mate_amount: null,
      mate_description: null,

      city: null,
      area: null,
      street: null,
      house_number: null,
      type: null,
      number_of_rooms: null,
      square: null,
      floor: null,
      house_condition: null,
      bathroom: null,
      internet: null,
      house_description: null,
    }
  },

  methods: {
    toggleType(type: string) {
      this.activeType = type;
    }
  }

}
</script>

<style lang="scss" scoped src="./AnnouncementPage.scss"></style>
<style lang="scss" scoped src="../LoginPage/LoginPage.scss"></style>