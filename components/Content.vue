<template>
  <div class="flex">
    <div
      v-for="(option, index) in options"
      :key="index"
      :class="option | formatOptionClass(options, index, selected)"
      @click="selected = option.value"
    >
      {{ option.label }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  filters: {
    formatOptionClass(
      option: any,
      options: any[],
      index: number,
      selected: any
    ) {
      let className =
        "py-3 text-center flex-grow border transition-all duration-200";
      if (index === 0) {
        className += " rounded-l-xl";
      } else if (index === options.length - 1) {
        className += " rounded-r-xl";
      }
      if (option.value === selected) {
        className += " bg-select border-select text-white";
      } else {
        className += "  border-bgborder text-primary font-weight-medium";
      }
      return className;
    }
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      selected: this.value
    };
  },
  watch: {
    selected(newSelected) {
      this.$emit("change", newSelected);
    }
  }
});
</script>
