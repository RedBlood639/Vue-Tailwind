<template>
  <div>
    <Header />
    <div>
      <div class="bg-gradient-to-b from-zumthor-75 to-riptide-75 pt-24">
        <h1
          class="text-center font-medium text-5xl text-oxford-blue mt-3 mb-2 px-10"
        >
          Deine Job website
        </h1>
        <img
          class="w-full"
          src="~/assets/images/home/agreement.svg"
          alt="Agreement"
        />
      </div>
      <img src="~/assets/images/home/bg-hero-edge.svg" alt="hero edge" />
    </div>
    <div class="mt-14 px-3">
      <single-choice
        :options="registerOptions"
        :value="selected"
        @change="selected = $event"
      />
    </div>
    <div class="mt-10 pb-28">
      <h3 class="px-8 text-2xl text-river-bed text-center font-medium">
        {{ stepsData.label }}
      </h3>

      <div class="flex flex-col pr-11">
        <div class="flex justify-end mt-5 z-10">
          <img :src="stepsData.steps[0].image" :alt="stepsData.steps[0].alt" />
        </div>
        <div class="flex items-end text-river-bed-50 relative -mt-6 ml-4">
          <span class="text-9xl z-10 font-medium">1.</span>
          <span class="text-lg pb-1 pl-7 z-10 font-medium">{{
            stepsData.steps[0].label
          }}</span>
          <span
            class="absolute bg-zumthor-50 bg-opacity-50 rounded-full w-72 h-72 -left-14 -bottom-9"
          />
        </div>
      </div>

      <div>
        <img
          src="~/assets/images/home/section-top-edge.svg"
          class="w-full"
          alt="section top edge"
        />
        <div class="bg-gradient-to-b from-riptide-75 to-zumthor-75">
          <div class="flex items-end text-river-bed-50 relative ml-10">
            <span class="text-9xl z-10 font-medium">2.</span>
            <span class="text-lg pb-1 pl-7 z-10 font-medium">{{
              stepsData.steps[1].label
            }}</span>
          </div>
          <div class="flex justify-center ml-8 mt-4">
            <img
              :src="stepsData.steps[1].image"
              :alt="stepsData.steps[1].alt"
            />
          </div>
        </div>
        <img
          src="~/assets/images/home/section-bottom-edge.svg"
          class="w-full"
          alt="section top edge"
        />
      </div>

      <div class="flex flex-col">
        <div
          class="flex items-end text-river-bed-50 relative -mt-6 ml-20 z-10 relative"
        >
          <span class="text-9xl z-10 font-medium z-10">3.</span>
          <span class="text-lg pb-1 pl-7 font-medium z-10">{{
            stepsData.steps[2].label
          }}</span>
          <span
            class="absolute bg-zumthor-50 rounded-full w-80 h-80 -left-28 -top-6"
          />
        </div>
        <div class="flex justify-center ml-4 mt-4 z-10">
          <img :src="stepsData.steps[2].image" :alt="stepsData.steps[2].alt" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/HeaderBar.vue";
import Footer from "../components/FooterBar.vue";
import Content from "../components/Content.vue";

import { registerOptionLabels, RegisterOptions } from "../common/data/enums";
import { enumToOptions } from "../common/utility";
import { homeRegistrationSteps } from "../common/data/content";

const registerOptions = enumToOptions<RegisterOptions>(
  RegisterOptions,
  registerOptionLabels
);
const registerSteps = homeRegistrationSteps;

export default Vue.extend({
  components: { Header, Footer, Content },
  data: () => ({
    registerOptions,
    selected: registerOptions[0].value,
    registerSteps
  }),
  computed: {
    stepsData() {
      return this.registerSteps[this.selected];
    }
  }
});
</script>
