<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50" />
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue';

const test = {
  id: 1,
  title: '123',
  description: '奥术大师大多',
  avatar:
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F07%2F20200607222012_lwusd.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615134040&t=2b07af99f5cebf9d6d12d2f22e8d351e'
};

export default defineComponent({
  name: 'Home',
  components: { ColumnList },
  setup() {
    const list = ref<ColumnProps[]>([]);
    list.value = new Array(6)
      .fill(test)
      .map((item, index) => ({ ...item, id: index + 1 }));

    return {
      list
    };
  }
});
</script>
