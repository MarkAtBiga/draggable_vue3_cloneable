<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col mx-2 px-2 py-3 bg-light border rounded">
        <h6>Idea 💡</h6>
        <draggable
          class="draggable-list"
          :list="tasks.clonables"
          :group="{ name: 'tasks', pull: 'clone', put: false }"
          :clone="clone"
          @end="onEnd"
        >
          <div v-for="(element, i) in tasks.clonables" :key="element.id">
            <div class="bg-white mt-3 p-2 shadow border rounded">
              <p>{{ element.name }}</p>
            </div>
          </div>
        </draggable>
      </div>
      <div class="col mx-2 px-2 py-3 bg-light border rounded">
        <h6>Todo ✍</h6>
        <draggable class="draggable-list" :list="tasks.todos" group="tasks">
          <div v-for="(element, i) in tasks.todos" :key="element.id">
            <div class="bg-white mt-3 p-2 shadow border rounded">
              <p>{{ element.name }}</p>
            </div>
          </div>
        </draggable>
      </div>
      <div class="col mx-2 px-2 py-3 bg-light border rounded">
        <h6>In Progress 🗓</h6>
        <draggable
          class="draggable-list"
          :list="tasks.inProgress"
          group="tasks"
        >
          <div v-for="(task, i) in tasks.inProgress" :key="i">
            <div class="bg-white mt-3 p-2 shadow border rounded">
              <p>{{ task }}</p>
            </div>
          </div>
        </draggable>
      </div>
      <div class="col mx-2 px-2 py-3 bg-light border rounded">
        <h6>Ready to go ✅</h6>
        <draggable class="draggable-list" :list="tasks.completed" group="tasks">
          <div v-for="(task, i) in tasks.completed" :key="i">
            <div class="bg-white mt-3 p-2 shadow border rounded">
              <p>{{ task }}</p>
            </div>
          </div>
        </draggable>
      </div>
    </div>
  </div>
  <Modal
    name="modalTest"
    :animation="true"
    v-model:visible="isVisible"
    :okButton="{
      onclick: onOK,
      loading: true,
    }"
  >
    <input v-model="message" placeholder="edit me" />
  </Modal>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import { useModal, Modal } from 'usemodal-vue3';

let isVisible = ref(false);
let message = ref('');
let activeIndex: i;
let globalId = 10;

export default {
  components: {
    draggable: VueDraggableNext,
    modal: Modal,
  },
  data() {
    return {
      tasks: {
        clonables: [
          { name: 'Clonable 1', id: 1 },
          { name: 'Clonable 2', id: 2 },
          { name: 'Clonable 3', id: 3 },
          { name: 'Clonable 4', id: 4 },
        ],
        todos: [
          { name: 'Clonable 5', id: 5 },
          { name: 'Clonable 6', id: 6 },
          { name: 'Clonable 7', id: 7 },
          { name: 'Clonable 8', id: 8 },
        ],
        inProgress: [],
        completed: [],
      },
      isVisible,
      message,
      activeIndex,
      globalId,
    };
  },
  methods: {
    log: function (evt) {
      window.console.log(evt);
    },
    pullFunction() {
      return this.controlOnStart ? 'clone' : true;
    },
    clone({ id }) {
      this.globalId++;
      return {
        name: 'Geklont :)' + this.globalId,
        id: this.globalId,
      };
    },
    onEnd(event) {
      this.activeIndex = event.newIndex;
      console.log(this.activeIndex);
      this.isVisible = true;
    },
    onOK() {
      this.tasks.todos[this.activeIndex].name = '' + message.value;
      this.isVisible = false;
    },
  },
};
</script>

<style scoped>
h6 {
  font-weight: 700;
}
.col {
  height: 90vh;
  overflow: auto;
}
.draggable-list {
  min-height: 10vh;
}
.draggable-list > div {
  cursor: pointer;
}
</style>
