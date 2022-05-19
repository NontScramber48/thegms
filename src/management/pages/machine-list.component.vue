<template>
  <pv-menu-bar></pv-menu-bar>
  <pv-tiered-menu></pv-tiered-menu>
  <pv-layout-main>
    <h1>MACHINES</h1>
    <div>
      <div class="card">
        <pv-toolbar class="mb-4">
          <template #start>
            <pv-button
              label="New"
              icon="pi pi-plus"
              class="p-button-success mr-2"
              @click="openNew"
            />
            <pv-button
              label="Delete"
              icon="pi pi-trash"
              class="p-button-danger"
              @click="confirmDeleteSelected"
              :disabled="!selectedMachines || !selectedMachines.length"
            />
          </template>
          <template #end>
            <pv-button
              label="Export"
              icon="pi pi-upload"
              class="p-button-help"
              @click="exportToCSV($event)"
            />
          </template>
        </pv-toolbar>
        <pv-data-table
          ref="dt"
          :value="machines"
          v-model:selection="selectedMachines"
          dataKey="id"
          :paginator="true"
          :rows="10"
          :filters="filters"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          :rowsPerPageOptions="[5, 10, 15]"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} tutorials"
          responsiveLayout="scroll"
        >
          <template #header>
            <div
              class="table-header flex flex-column md:flex-row md:justify-content-between"
            >
              <h5 class="mb-2 md:m-0 p-as-md-center text-xl">
                Manage Machines
              </h5>
              <span class="p-input-icon-left"
                ><i class="pi pi-search" /><pv-input-text
                  v-model="filters['global'].value"
                  placeholder="Search..."
                />
              </span>
            </div>
          </template>
          <pv-column
            selectionMode="multiple"
            style="width: 3rem"
            :exportable="false"
          ></pv-column>
          <pv-column
            field="id"
            header="Id"
            :sortable="true"
            style="min-width: 3rem"
          ></pv-column>
          <pv-column
            field="name"
            header="Name"
            :sortable="true"
            style="min-width: 8rem"
          ></pv-column>
          <pv-column
            field="description"
            header="Description"
            :sortable="true"
            style="min-width: 12rem"
          ></pv-column>
          <pv-column
            field="lifetime"
            header="Lifetime"
            :sortable="true"
            style="min-width: 12rem"
          ></pv-column>
          <pv-column
            field="status"
            header="Status"
            :sortable="true"
            style="min-width: 12rem"
          >
            <template #body="slotProps">
              <pv-tag
                v-if="slotProps.data.status === 'Published'"
                severity="success"
                >{{ slotProps.data.status }}</pv-tag
              >
              <pv-tag v-else severity="info">{{
                slotProps.data.status
              }}</pv-tag>
            </template>
          </pv-column>
          <pv-column :exportable="false" style="min-width: 8rem">
            <template #body="slotProps">
              <pv-button
                icon="pi pi-pencil"
                class="p-button-text p-button-rounded"
                @click="editMachine(slotProps.data)"
              />
              <pv-button
                icon="pi pi-trash"
                class="p-button-text p-button-rounded"
                @click="confirmDeleteMachine(slotProps.data)"
              />
            </template>
          </pv-column>
        </pv-data-table>
      </div>
      <pv-dialog
        v-model:visible="machineDialog"
        :style="{ width: '450px' }"
        header="Machine Information"
        :modal="true"
        class="p-fluid"
      >
        <div class="field">
          <span class="p-float-label">
            <pv-input-text
              type="text"
              id="name"
              v-model.trim="machine.name"
              required="true"
              autofocus
              :class="{ 'p-invalid': submitted && !machine.name }"
            />
            <label for="name">Name</label>
            <small class="p-error" v-if="submitted && !machine.name"
              >Name is required.</small
            >
          </span>
        </div>
        <div class="field">
          <span class="p-float-label">
            <pv-textarea
              id="description"
              v-model="machine.description"
              required="false"
              rows="2"
              cols="2"
            />
            <label for="description">Description</label>
          </span>
        </div>
        <div class="field">
          <span class="p-float-label">
            <pv-textarea
              id="lifetime"
              v-model="machine.lifetime"
              required="false"
              rows="2"
              cols="2"
            />
            <label for="lifetime">Lifetime</label>
          </span>
        </div>
        <div class="field">
          <pv-dropdown
            id="active"
            v-model="machine.status"
            :options="statuses"
            optionLabel="label"
            placeholder="Select an Status"
          >
            <template #value="slotProps">
              <div v-if="slotProps.value && slotProps.value.value">
                <span>{{ slotProps.value.label }}</span>
              </div>
              <div v-else-if="slotProps.value && !slotProps.value.value">
                <span>{{ slotProps.value }}</span>
              </div>
              <span v-else>{{ slotProps.placeholder }}</span>
            </template>
          </pv-dropdown>
        </div>
        <template #footer>
          <pv-button
            label="Cancel"
            icon="pi pi-times"
            class="p-button-text"
            @click="hideDialog"
          />
          <pv-button
            label="Save"
            icon="pi pi-check"
            class="p-button-text"
            @click="saveMachine"
          />
        </template>
      </pv-dialog>
      <pv-dialog
        v-model:visible="deleteMachineDialog"
        :style="{ width: '450px' }"
        header="Confirm"
        :modal="true"
      >
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span v-if="machine"
            >Are you sure you want to delete <b>{{ machine.name }}</b></span
          >
        </div>
        <template #footer>
          <pv-button
            label="No"
            icon="pi pi-times"
            class="p-button-text"
            @click="deleteMachineDialog = false"
          />
          <pv-button
            label="Yes"
            icon="pi pi-check"
            class="p-button-text"
            @click="deleteMachine"
          />
        </template>
      </pv-dialog>
      <pv-dialog
        v-model:visible="deleteMachinesDialog"
        :style="{ width: '450px' }"
        header="Confirm"
        :modal="true"
      >
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle mr-3" syle="font-size: 2rem" />
          <span v-if="selectedMachines"
            >Are you sure you want to delete the selected machines?</span
          >
        </div>
        <template #footer>
          <pv-button
            label="No"
            icon="pi pi-times"
            class="p-button-text"
            @click="deleteMachinesDialog = false"
          />
          <pv-button
            label="Yes"
            icon="pi pi-check"
            class="p-button-text"
            @click="deleteSelectedMachines"
          />
        </template>
      </pv-dialog>
    </div>
  </pv-layout-main>
</template>

<script>
import pvMenuBar from "../../core/components/pv-menu-bar.vue";
import pvTieredMenu from "../../core/components/pv-tiered-menu.vue";
import pvLayoutMain from "../../core/components/pv-layout-main.vue";
import { MachinesApiService } from "../services/machines-api.service";
import { FilterMatchMode } from "primevue/api";
export default {
  name: "machine-list.component",
  components: {
    pvMenuBar,
    pvTieredMenu,
    pvLayoutMain,
  },
  data() {
    return {
      machines: [],
      machineDialog: false,
      deleteMachineDialog: false,
      deleteMachinesDialog: false,
      machine: {},
      selectedMachines: null,
      filters: {},
      submitted: false,
      statuses: [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
      ],
      machinesService: null,
    };
  },
  created() {
    this.machinesService = new MachinesApiService();
    this.machinesService.getAll().then((response) => {
      this.machines = response.data;
      this.machines.forEach((machine) =>
        this.getDisplayableMachine(machine)
      );
      console.log(this.machines);
    });
    this.initFilters();
  },
  methods: {
    getDisplayableMachine(machine) {
      machine.status = machine.active
        ? this.statuses[0].label
        : this.statuses[1].label;
      return machine;
    },
    getStorableMachine(displayableMachine) {
      return {
        id: displayableMachine.id,
        name: displayableMachine.name,
        description: displayableMachine.description,
        lifetime: displayableMachine.lifetime,
        active: displayableMachine.status.label === "Active",
      };
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
    findIndexById(id) {
      return this.machines.findIndex((machine) => machine.id === id);
    },
    openNew() {
      this.machine = {};
      this.submitted = false;
      this.machineDialog = true;
    },
    hideDialog() {
      this.machineDialog = false;
      this.submitted = false;
    },
    saveMachine() {
      this.submitted = true;
      if (this.machine.name.trim()) {
        if (this.machine.id) {
          this.machine = this.getStorableMachine(this.machine);
          this.machinesService
            .update(this.machine.id, this.machine)
            .then((response) => {
              this.machines[this.findIndexById(response.data.id)] =
                this.getDisplayableMachine(response.data);
              this.$toast.add({
                severity: "success",
                summary: "Successful",
                detail: "Machine Updated",
                life: 3000,
              });
              console.log(response);
            });
        } else {
          this.machine.id = 0;
          this.machine = this.getStorableMachine(this.machine);
          this.machinesService.create(this.machine).then((response) => {
            this.machine = this.getDisplayableMachine(response.data);
            this.machines.push(this.machine);
            this.$toast.add({
              severity: "success",
              summary: "Successful",
              detail: "Machine Created",
              life: 3000,
            });
            console.log(response);
          });
        }
      }
      this.machineDialog = false;
      this.machine = {};
    },
    editMachine(machine) {
      this.machine = { ...machine };
      this.machineDialog = true;
    },
    confirmDeleteMachine(machine) {
      this.machine = machine;
      this.deleteMachineDialog = true;
    },
    deleteMachine() {
      this.machinesService.delete(this.machine.id).then((response) => {
        this.machines = this.machines.filter(
          (t) => t.id !== this.machine.id
        );
        this.deleteMachineDialog = false;
        this.machine = {};
        this.$toast.add({
          severity: "success",
          summary: "Successful",
          detail: "Machine Deleted",
          life: 3000,
        });
        console.log(response);
      });
    },
    exportToCSV() {
      this.$refs.dt.exportCSV();
    },
    confirmDeleteSelected() {
      this.deleteMachinesDialog = true;
    },
    deleteSelectedMachines() {
      this.selectedMachines.forEach((machine) => {
        this.machinesService.delete(machine.id).then((response) => {
          this.machines = this.machines.filter(
            (t) => t.id !== this.machine.id
          );
          console.log(response);
        });
      });
      this.deleteMachinesDialog = false;
    },
  },
};
</script>

<style scoped></style>