import service from './request';

export function GET(url: string, params = {}) {
  return service.get(url, { params });
}

export function POST(url: string, data = {}) {
  return service.post(url, data);
}

export function PATCH(url: string, id: string) {
  return service.patch(`${url}/${id}`);
}

export function DELETE(url: string, id: string) {
  return service.delete(`${url}/${id}`);
}
