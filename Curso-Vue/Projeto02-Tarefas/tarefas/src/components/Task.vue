<template>
  <div>
    <div class="buttonRemove" @click="remove">X</div>
    <div class="task" :style="{ backgroundColor: color }">
      <p class="text">{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  methods: {
    remove() {
      this.$emit("removeTask");
    },
  },
};
</script>

<style>
.task {
  min-width: 250px;
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.text {
  font-size: 24px;

  padding: 2%;
}

.buttonRemove {
  display: flex;
  justify-content: flex-end;
  font-size: 24px;

  margin: 0 8px -30px 0;

  cursor: pointer;
}
</style>