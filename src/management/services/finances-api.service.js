import http from "../../core/services/http-common";
class MachinesApiService {
  getAll() {
    return http.get("/finances");
  }
  getById(id) {
    return http.get(`/finances/${id}`);
  }
  create(data) {
    return http.post("/finances", data);
  }
  update(id, data) {
    return http.put(`/finances/${id}`, data);
  }
  delete(id) {
    return http.delete(`/finances/${id}`);
  }
  findByTitle(title) {
    return http.get(`/finances?title=${title}`);
  }
}

export default new MachinesApiService();