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
        >
          <div v-for="(element, i) in tasks.clonables" :key="element.id">
            <div class="bg-white mt-3 p-2 shadow border rounded">
              <p>{{ element }}</p>
            </div>
          </div>
        </draggable>
      </div>
      <div class="col mx-2 px-2 py-3 bg-light border rounded">
        <h6>Todo ✍</h6>
        <draggable class="draggable-list" :list="tasks.todos" group="tasks">
          <div v-for="(element, i) in tasks.todos" :key="element.id">
            <div class="bg-white mt-3 p-2 shadow border rounded">
              <p>{{ element }}</p>
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
</template>

<script lang="ts">
import Vue from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';

export default {
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      tasks: {
        clonables: [
          { name: 'Clonable 1', id: 1 },
          { name: 'Clonable 2', id: 2 },
          { name: 'Clonable 3', id: 3 },
          { name: 'Clonable 1', id: 4 },
        ],
        todos: [
          { name: 'Clonable 1', id: 5 },
          { name: 'Clonable 2', id: 6 },
          { name: 'Clonable 3', id: 7 },
          { name: 'Clonable 1', id: 8 },
        ],
        inProgress: [],
        completed: [],
      },
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
      return {
        name: 'Geklont :)',
        id: id + 10,
      };
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
