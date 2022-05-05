import http from "../../core/services/http-common";

export default class ProductsApiService{
  getProducts() {
    return http.get("/products");
  }
  create(data) {
    return http.post("/products", data);
  }
  update(id, data) {
    return http.put(`/products/${id}`, data);
  }
  delete(id) {
    return http.delete(`/products/${id}`);
  }
}
