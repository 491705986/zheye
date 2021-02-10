import { GET } from '@/utils/service';

interface GetColumnsParams {
  currentPage: number;
  pageSize: number;
}

export function getColumns(params: GetColumnsParams) {
  return GET('api/columns', params);
}
