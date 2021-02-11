import { getColumns } from '@/api';
import { createStore, createLogger } from 'vuex';
import { testPosts } from '@/testData';

interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}

interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string;
}

export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}

export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: [],
    posts: testPosts,
    user: { isLogin: true, name: 'Ben', columnId: 1 }
  },
  mutations: {
    login(state) {
      state.user = {
        ...state.user,
        isLogin: true,
        name: 'Ben',
        columnId: 1
      };
    },
    createPost(state, newPost) {
      state.posts.push(newPost);
    },
    fetchColumns(state, rawData) {
      state.columns = rawData;
    }
  },
  actions: {
    fetchColumns(context) {
      getColumns({ currentPage: 1, pageSize: 10 }).then(res => {
        context.commit('fetchColumns', res.data.list);
      });
    }
  },
  getters: {
    getColumnById: state => (id: string) => {
      return state.columns.find(c => c._id === id);
    },
    getPostsByCid: state => (currentId: number) => {
      return state.posts.filter(post => post.columnId === currentId);
    }
  },
  plugins: [createLogger()]
});

export default store;
