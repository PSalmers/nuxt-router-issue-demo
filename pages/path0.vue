<template>
  <empty v-if="$store.state.useEmptyComponent"></empty>
  <div v-else></div>
</template>


<script>
import Empty from "~/components/Empty"
export default {
  created() {
    this.$router.push("/path1")
  },
  components: {Empty}
}
</script>
