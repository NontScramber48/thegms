<template>
  <pv-menu-bar></pv-menu-bar>
  <pv-tiered-menu></pv-tiered-menu>
  <pv-layout-main>
    <div>
      <div class="card">
        <pv-toolbar class="mb-4">
          <template #start>
            <pv-button label="New" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew" />
            <pv-button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
          </template>

          <template #end>
            <pv-fileupload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />
            <pv-button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
          </template>
        </pv-toolbar>

        <pv-data-table ref="dt" :value="products" v-model:selection="selectedProducts" dataKey="id"
                      :paginator="true" :rows="10" :filters="filters"
                      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" responsiveLayout="scroll">
          <template #header>
            <div class="table-header flex flex-column md:flex-row md:justiify-content-between">
              <h5 class="mb-2 md:m-0 p-as-md-center">Manage Products</h5>
              <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <pv-input-text v-model="filters['global'].value" placeholder="Search..." />
                </span>
            </div>
          </template>

          <pv-column selectionMode="multiple" style="width: 3rem" :exportable="false"></pv-column>
          <pv-column field="code" header="Code" :sortable="true" style="min-width:12rem"></pv-column>
          <pv-column field="name" header="Name" :sortable="true" style="min-width:16rem"></pv-column>
          <pv-column header="Image">
            <template #body="slotProps">
              <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
            </template>
          </pv-column>
          <pv-column field="price" header="Price" :sortable="true" style="min-width:8rem">
            <template #body="slotProps">
              {{formatCurrency(slotProps.data.price)}}
            </template>
          </pv-column>
          <pv-column field="category" header="Category" :sortable="true" style="min-width:10rem"></pv-column>

          <pv-column field="inventoryStatus" header="Status" :sortable="true" style="min-width:12rem">
            <template #body="slotProps">
              <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
            </template>
          </pv-column>
          <pv-column :exportable="false" style="min-width:8rem">
            <template #body="slotProps">
              <pv-button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editProduct(slotProps.data)" />
              <pv-button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
            </template>
          </pv-column>
        </pv-data-table>
      </div>

      <pv-dialog v-model:visible="productDialog" :style="{width: '450px'}" header="Product Details" :modal="true" class="p-fluid">
        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="product.image" class="product-image" v-if="product.image" />
        <div class="field">
          <label for="name">Name</label>
          <pv-input-text :id="name" v-model.trim="product.name" required="true" autofocus :class="{'p-invalid': submitted && !product.name}" />
          <small class="p-error" v-if="submitted && !product.name">Name is required.</small>
        </div>
        <div class="field">
          <label for="description">Description</label>
          <pv-textarea :id="description" v-model="product.description" required="true" rows="3" cols="20" />
        </div>

        <div class="field">
          <label for="inventoryStatus" class="mb-3">Inventory Status</label>
          <pv-dropdown :id="inventoryStatus" v-model="product.inventoryStatus" :options="statuses" optionLabel="label" placeholder="Select a Status">
            <template #value="slotProps">
              <div v-if="slotProps.value && slotProps.value.value">
                <span :class="'product-badge status-' +slotProps.value.value">{{slotProps.value.label}}</span>
              </div>
              <div v-else-if="slotProps.value && !slotProps.value.value">
                <span :class="'product-badge status-' +slotProps.value.toLowerCase()">{{slotProps.value}}</span>
              </div>
              <span v-else>
							{{slotProps.placeholder}}
						</span>
            </template>
          </pv-dropdown>
        </div>

        <div class="field">
          <label class="mb-3">Category</label>
          <div class="formgrid grid">
            <div class="field-radiobutton col-6">
              <pv-radiobutton :id="category1" name="category" value="Accessories" v-model="product.category" />
              <label for="category1">Accessories</label>
            </div>
            <div class="field-radiobutton col-6">
              <pv-radiobutton :id="category2" name="category" value="Clothing" v-model="product.category" />
              <label for="category2">Clothing</label>
            </div>
            <div class="field-radiobutton col-6">
              <pv-radiobutton :id="category3" name="category" value="Electronics" v-model="product.category" />
              <label for="category3">Electronics</label>
            </div>
            <div class="field-radiobutton col-6">
              <pv-radiobutton :id="category4" name="category" value="Fitness" v-model="product.category" />
              <label for="category4">Fitness</label>
            </div>
          </div>
        </div>

        <div class="formgrid grid">
          <div class="field col">
            <label for="price">Price</label>
            <pv-inputnumber :id="price" v-model="product.price" mode="currency" currency="PEN" locale="en-US" />
          </div>
          <div class="field col">
            <label for="quantity">Quantity</label>
            <pv-inputnumber :id="quantity" v-model="product.quantity" integeronly />
          </div>
        </div>
        <template #footer>
          <pv-button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
          <pv-button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
        </template>
      </pv-dialog>

      <pv-dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span v-if="product">Are you sure you want to delete <b>{{product.name}}</b>?</span>
        </div>
        <template #footer>
          <pv-button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"/>
          <pv-button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
        </template>
      </pv-dialog>

      <pv-dialog v-model:visible="deleteProductsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span v-if="product">Are you sure you want to delete the selected products?</span>
        </div>
        <template #footer>
          <pv-button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false"/>
          <pv-button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts" />
        </template>
      </pv-dialog>
    </div>
  </pv-layout-main>


</template>

<script>
import pvMenuBar from "../../core/components/pv-menu-bar.vue";
import pvTieredMenu from "../../core/components/pv-tiered-menu.vue";
import pvLayoutMain from "../../core/components/pv-layout-main.vue";
import ProductsApiService  from "../services/products-api.service.js";
import { FilterMatchMode } from 'primevue/api';
export default {
  name: "inventory-list.component",
  components:{
    pvMenuBar,
    pvTieredMenu,
    pvLayoutMain,
  },
  data() {
    return {
      products: null,
      productDialog: false,
      deleteProductDialog: false,
      deleteProductsDialog: false,
      product: {},
      selectedProducts: null,
      filters: {},
      submitted: false,
      statuses: [
        {label: 'INSTOCK', value: 'instock'},
        {label: 'LOWSTOCK', value: 'lowstock'},
        {label: 'OUTOFSTOCK', value: 'outofstock'}
      ]
    }
  },
  productService: null,
  created() {
    this.productService = new ProductsApiService();
    this.initFilters();
  },
  mounted() {
    this.getAll();
  },
  methods:{
    getAll(){
      this.productService.getProducts().then(data => {this.products=data.data;});
    },
    formatCurrency(value) {
      if(value)
        return value.toLocaleString('en-US', {style: 'currency', currency: 'PEN'});
      return;
    },
    deleteProduct() {
      this.productService.delete(this.product.id).then(data => {
        this.products=this.products.filter(val => val.id !== this.product.id);});
      this.products = this.products.filter(val => val.id !== this.product.id);
      this.deleteProductDialog = false;
      this.product = {};
      this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});

    },
    openNew() {
      this.product = {};
      this.submitted = false;
      this.productDialog = true;
    },
    hideDialog() {
      this.productDialog = false;
      this.submitted = false;
    },
    saveProduct() {
      this.submitted = true;
      if (this.product.name.trim()) {
        if (this.product.id) {
          this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value: this.product.inventoryStatus;
          this.products[this.findIndexById(this.product.id)] = this.product;
          this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
        }
        else {
          this.product.id = this.createId();
          this.product.code = this.createId();
          this.product.image = 'product-placeholder.svg';
          this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
          this.products.push(this.product);
          this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        }
        this.productDialog = false;
        this.product = {};
      }
    },
    editProduct(product) {
      this.product = {...product};
      this.productDialog = true;
    },
    confirmDeleteProduct(product) {
      this.product = product;
      this.deleteProductDialog = true;
    },
    deleteProduct() {
      this.products = this.products.filter(val => val.id !== this.product.id);
      this.deleteProductDialog = false;
      this.product = {};
      this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      this.productService.delete(this.product.id).then(data => {this.products=data.data;});
    },
    findIndexById(id) {
      let index = -1;
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === id) {
          index = i;
          break;
        }
      }
      return index;
    },
    createId() {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( var i = 0; i < 5; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
    },
    exportCSV() {
      this.$refs.dt.exportCSV();
    },
    confirmDeleteSelected() {
      this.deleteProductsDialog = true;
    },
    deleteSelectedProducts() {
      this.products = this.products.filter(val => !this.selectedProducts.includes(val));
      this.deleteProductsDialog = false;
      this.selectedProducts = null;
      this.$toast.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
    },
    initFilters() {
      this.filters = {
        'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
      }
    }
  }
};
</script>

<style scoped>

</style>