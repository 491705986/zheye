<template>
  <h1>
    <pre>{{ route }}</pre>
  </h1>
</template>

<script>
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'ColumnDetail',
  setup() {
    const route = useRoute();
    return {
      route
    };
  }
});
</script>
