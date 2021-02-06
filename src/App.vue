<template>
  <div class="container">
    <ColumnList :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColumnList, { ColumnProps } from './components/ColumnList.vue';
import Logo from './assets/logo.png';

const testData: ColumnProps[] = [
  {
    id: 1,
    title: '123',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    avatar: Logo
  }
];

export default defineComponent({
  name: 'App',
  components: { ColumnList },
  setup() {
    const list = ref<ColumnProps[]>([]);
    list.value = new Array(9)
      .fill(testData[0])
      .map((item, index) => ({ ...item, id: index + 1 }));
    return {
      list
    };
  }
});
</script>
