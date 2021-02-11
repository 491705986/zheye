import { GET, POST, PATCH, DELETE } from '@/utils/service';

// 用户登录
export function login(params: { email: string; password: string }) {
  return POST('/user/login', params);
}

// 新建用户
export function createUser(params: {
  email: string;
  nickName: string;
  password: string;
}) {
  return POST('/users', params);
}

// 获取当前用户数据
export function getUserInfo() {
  return GET('/users');
}

// 更新单个用户信息
export function updateUserInfo(id: string) {
  return PATCH('/user', id);
}

// 获取专栏列表
export function getColumns(params?: {
  currentPage?: number;
  pageSize?: number;
}) {
  return GET('/columns', params);
}

// 获取一个专栏详情
export function getColumnDetail(params: { id: string }) {
  return GET('/columns', params);
}

// 更新一个专栏详情
export function updateColumnDetail(id: string) {
  return PATCH('/columns', id);
}

// 新建一篇文章
export function createPost(params: {
  title: string;
  content: string;
  image: string;
  column: string;
  author: string;
}) {
  return POST('/posts', params);
}

// 获得属于专栏的文章列表
export function getPosts(params: {
  id: string;
  currentPage?: number;
  pageSize?: number;
}) {
  return GET(`/columns/${params.id}/posts`, params);
}

// 获得单个文章信息
export function getPostDetail(params: { id: string }) {
  return GET('/posts', params);
}

// 更新单个文章信息
export function updatePost(id: string) {
  return PATCH('/posts', id);
}

// 删除单个文章信息
export function deletePost(id: string) {
  return DELETE('/posts', id);
}

// 上传文件
export function uploadFile(params: { file: FormData }) {
  return POST('/upload', params);
}
