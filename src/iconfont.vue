<template>
  <i :class="`${font} ${type}`" :style="styles"></i>
</template>

<script>
export default {
  name: "icon-font",
  props: {
    type: {
      type: String,
      required: true
    },
    font: {
      type: String,
      default: 'iconfont'
    },
    color: {
      type: String,
      default: 'auto'
    },
    size: {
      type: [String, Number],
      default: 'inherit'
    }
  },
  computed: {
    styles() {
      return {
        fontSize: typeof this.size === 'number' ? `${this.size}px` : this.size,
        color: this.color
      }
    }
  }
}
</script>
