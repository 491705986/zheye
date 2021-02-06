<template>
  <div class="container">
    <GlobalHeader :user="currentUser" />
    <!--    <ColumnList :list="list" />-->
    <form>
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <ValidateInput
          v-model="emailVal"
          :rules="emailRules"
          type="text"
          placeholder="请输入邮箱地址"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <ValidateInput
          v-model="passwordVal"
          :rules="passwordRules"
          type="password"
          placeholder="请输入密码"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue';
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue';
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue';
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
  components: { ColumnList, GlobalHeader, ValidateInput },
  setup() {
    const list = ref<ColumnProps[]>([]);
    list.value = new Array(9)
      .fill(testData[0])
      .map((item, index) => ({ ...item, id: index + 1 }));

    const emailVal = ref('');
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ];

    const passwordVal = ref('');
    const passwordRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ];

    return {
      list,
      currentUser,
      emailVal,
      emailRules,
      passwordVal,
      passwordRules
    };
  }
});
</script>
