<template>
  <div class="container">
    <GlobalHeader :user="currentUser" />
    <ColumnList :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue';
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue';
import Logo from './assets/logo.png';

const currentUser: UserProps = {
  isLogin: true,
  name: 'Ben',
  id: '123'
};

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
  components: { ColumnList, GlobalHeader },
  setup() {
    const list = ref<ColumnProps[]>([]);
    list.value = new Array(9)
      .fill(testData[0])
      .map((item, index) => ({ ...item, id: index + 1 }));
    return {
      list,
      currentUser
    };
  }
});
</script>
