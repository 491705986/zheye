<template>
  <div class="container">
    <ColumnList :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColumnList, { ColumnProps } from './components/ColumnList.vue';

const testData: ColumnProps[] = [
  {
    id: 1,
    title: '123',
    description: '奥术大师大多',
    avatar:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F07%2F20200607222012_lwusd.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615134040&t=2b07af99f5cebf9d6d12d2f22e8d351e'
  },
  {
    id: 2,
    title: '1234',
    description: '奥术大师大多2',
    avatar:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F07%2F20200607222012_lwusd.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615134040&t=2b07af99f5cebf9d6d12d2f22e8d351e'
  }
];

export default defineComponent({
  name: 'App',
  components: { ColumnList },
  setup() {
    return {
      list: testData
    };
  }
});
</script>
