export const state = () => ({
  todoList: [],
  listDone: []
})

export const getters = {

}

export const mutations = {
  addItem (state, payload) {
    state.todoList.push(payload.text)
  },
  deleteItem (state, payload) {
    state.todoList = state.todoList.filter((e, i) => i !== payload.index)
  },
  markAsDone (state, payload) {
    if (state.listDone.includes(payload.index)) {
      state.listDone = state.listDone.filter(e => e !== payload.index)
      return
    }
    state.listDone.push(payload.index)
  }
}

export const actions = {

}
