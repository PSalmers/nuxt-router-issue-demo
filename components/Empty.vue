<template>
  <div v-if="amIAuthorizedOrLoadedYet"></div>
</template>

<script>
export default {
  data() {
    return {
      amIAuthorizedOrLoadedYet: false
    };
  }
};
</script>
