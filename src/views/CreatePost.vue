<template>
  <div class="create-post-page mb-3">
    <h4>新建文章</h4>
    <ValidateForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题：</label>
        <ValidateInput
          :rules="titleRules"
          v-model="titleVal"
          placeholder="请输入文章标题"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情：</label>
        <ValidateInput
          rows="10"
          :rules="contentRules"
          v-model="contentVal"
          placeholder="请输入文章标题"
          type="textarea"
          tag="textarea"
        />
      </div>
      <template #submit>
        <button class="btn btn-primary btn-large">发表文章</button>
      </template>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { GlobalDataProps, PostProps } from '@/store';
import ValidateForm from '@/components/ValidateForm.vue';
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue';

export default defineComponent({
  name: 'CreatePost',
  components: { ValidateForm, ValidateInput },
  setup() {
    const router = useRouter();
    const store = useStore<GlobalDataProps>();
    const titleVal = ref('');
    const titleRules: RulesProp = [
      { type: 'required', message: '文章标题不能为空' }
    ];
    const contentVal = ref('');
    const contentRules: RulesProp = [
      { type: 'required', message: '文章详情不能为空' }
    ];

    const onFormSubmit = (result: boolean) => {
      if (result) {
        const { columnId } = store.state.user;
        if (!columnId) return;
        const newPost: PostProps = {
          _id: 'new Date().getTime()',
          title: titleVal.value,
          content: contentVal.value,
          column: columnId.toString(),
          createdAt: new Date().toLocaleString()
        };
        store.commit('createPost', newPost);
        router.push({ name: 'column', params: { id: columnId } });
      }
    };
    return {
      titleVal,
      titleRules,
      contentVal,
      contentRules,
      onFormSubmit
    };
  }
});
</script>
