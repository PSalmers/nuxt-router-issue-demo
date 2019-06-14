<template>
  <empty></empty>
</template>


<script>
import Empty from "~/components/Empty"
export default {
  layout: "nondefault",
  created() {
    this.$axios.get('')
  },
  components: {Empty}
}
</script>
