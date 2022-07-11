export const state = () => ({
  tasks: []
})

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{content: task, done: false}, ...state.tasks];
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
  TOGGLE_TASK(state,task) {
    task.done = !task.done
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
  LOAD_FROM_LOCALSTORAGE(state) {
    state.tasks = JSON.parse(localStorage.getItem('tasks'));
  }
}

