<template>
  <div :class="{'is-complete' : task.done}" class="task">
    <div class="content">{{ task.content }}</div>
    <div class="buttons">
      <button @click.prevent="toggleTask">{{ task.done ? 'Старт' : 'Стоп' }}</button>
      <button class="delete" @click="removeTask">Удалить</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "TaskItem",
  props: ['task'],
  methods: {
    toggleTask() {
      this.$store.commit('TOGGLE_TASK', this.task);
    },
    removeTask() {
      this.$store.commit('REMOVE_TASK', this.task);
    }
  }
}
</script>

<style scoped>

</style>
