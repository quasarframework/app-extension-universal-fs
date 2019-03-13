<template>
  <div>
    {{greeting}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      greeting: ''
    }
  },
  created () {
    try {
      const greetingText = this.$ufs.readFile('../greeting.txt')
      this.greeting = greetingText
    } catch (e) { console.error(e) }
  }
}
</script>
