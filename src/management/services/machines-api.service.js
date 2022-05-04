import http from "../../core/services/http-common";
class MachinesApiService {
  getAll() {
    return http.get("/machines");
  }
  getById(id) {
    return http.get(`/machines/${id}`);
  }
  create(data) {
    return http.post("/machines", data);
  }
  update(id, data) {
    return http.put(`/machines/${id}`, data);
  }
  delete(id) {
    return http.delete(`/machines/${id}`);
  }
  findByTitle(title) {
    return http.get(`/machines?title=${title}`);
  }
}

export default new MachinesApiService();