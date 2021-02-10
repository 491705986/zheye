import service from './request';

export function GET(url: string, params = {}, config = {}) {
  return service.get(url, { params, ...config });
}

export function POST(url: string, data = {}, config = {}) {
  return service.post(url, data, config);
}
