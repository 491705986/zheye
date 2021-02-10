import { createStore, createLogger } from 'vuex';
import { testPosts, testData, ColumnProps, PostProps } from '@/testData';

interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false }
  },
  mutations: {
    login(state) {
      state.user = {
        ...state.user,
        isLogin: true,
        name: 'Ben'
      };
    }
  },
  getters: {
    getColumnById: state => (id: number) => {
      return state.columns.find(c => c.id === id);
    },
    getPostsByCid: state => (currentId: number) => {
      return state.posts.filter(post => post.columnId === currentId);
    }
  },
  plugins: [createLogger()]
});

export default store;
