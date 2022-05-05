import http from "../../core/services/http-common";
export class FinancesApiService {
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
  findByName(name) {
    return http.get(`/finances?name=${name}`);
  }
}

export default new FinancesApiService();