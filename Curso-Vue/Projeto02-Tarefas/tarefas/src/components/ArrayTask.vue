<template>
  <div class="multTask">
    <div v-if="name.length == 0">
        <p class="text">Sua Vida está em ordem!!</p>
    </div>
    <div class="block" @click="alterColor(i)" v-for="(i, index) in name" :key="i.name">
      <Task :name="i.name" :color="i.color" @removeTask="name.splice(index, 1)"></Task>
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  components: { Task },
  props: {
    name: {
      type: Array,
    },
  },
  methods: {
      alterColor(i) {
          if(i.color === 'green') {
            i.color = 'red'
          } else {
              i.color = 'green'
          }
      }
  }
};
</script>

<style>
.multTask {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.block {
    margin: 0 2% 2% 0;
}

.text {
    font-size: 30px;
}
</style>