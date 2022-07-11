<template>
  <main>
    <h1>Список задач</h1>
    <p>Создать список задач</p>

    <div class="create-new">
      <input
        type="text"
        v-model="newTask"
        placeholder="Добавить задачу"
        @keypress.enter="addTask"
      >
      <button @click="addTask">Добавить</button>
    </div>
    <div class="tasks">
      <TaskItem
        v-for="(task, i) in $store.state.tasks"
        :key="i"
        :task="task"
      />
    </div>
  </main>
</template>

<script>
import TaskItem from "@/components/TaskItem";
export default {
  name: 'IndexPage',
  components: {TaskItem},
  data() {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask(){
      if(this.newTask){
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
      }
    },
    removeTask(task){
      this.$store.commit('REMOVE_TASK', task);
    },
    toggleTask(task){
      this.$store.commit('TOGGLE_TASK', task);
    }
  },
  mounted() {
    if(localStorage.getItem('tasks')){
      this.$store.commit('LOAD_FROM_LOCALSTORAGE')
    }
  }
}
</script>
