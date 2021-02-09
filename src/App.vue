<template>
  <div class="container">
    <GlobalHeader :user="currentUser" />
    <ValidateForm @form-submit="onFormSubmit">
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
      <template v-slot:submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue';
import ValidateForm from '@/components/ValidateForm.vue';
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue';

const currentUser: UserProps = {
  isLogin: true,
  name: 'Ben',
  id: '123'
};

export default defineComponent({
  name: 'App',
  components: { GlobalHeader, ValidateForm, ValidateInput },
  setup() {
    const emailVal = ref('491705986@qq.com');
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ];
    const passwordVal = ref('123456');
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ];

    const onFormSubmit = (result: boolean) => {
      console.log('result', result);
    };

    return {
      currentUser,
      emailVal,
      emailRules,
      passwordVal,
      passwordRules,
      onFormSubmit
    };
  }
});
</script>
