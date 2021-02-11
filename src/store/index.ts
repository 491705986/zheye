import { getColumns, getColumnDetail, getPosts } from '@/api';
import { createStore, createLogger } from 'vuex';

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
  _id: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: ImageProps;
  createdAt: string;
  column: string;
}

export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: [],
    posts: [],
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
    },
    fetchColumn(state, rawData) {
      state.columns = [rawData];
    },
    fetchPosts(state, rawData) {
      state.posts = rawData;
    }
  },
  actions: {
    fetchColumns({ commit }) {
      getColumns().then(res => {
        commit('fetchColumns', res.data.list);
      });
    },
    fetchColumn({ commit }, cid) {
      getColumnDetail({ id: cid }).then(res => {
        commit('fetchColumn', res.data);
      });
    },
    fetchPosts({ commit }, cid) {
      getPosts({ id: cid }).then(res => {
        commit('fetchPosts', res.data.list);
      });
    }
  },
  getters: {
    getColumnById: state => (id: string) => {
      return state.columns.find(c => c._id === id);
    },
    getPostsByCid: state => (currentId: string) => {
      return state.posts.filter(post => post.column === currentId);
    }
  },
  plugins: [createLogger()]
});

export default store;
