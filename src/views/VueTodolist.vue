<template>
  <div>
    <div class="container">
      <h1>{{ header }}</h1>
      <div class="row input-row">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <input
              type="date"
              class="form-control"
              id="date"
              name="date"
              width="140px"
              v-model="inputValue.date"
            />
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="輸入代辦事項"
            v-model="inputValue.todo"
            v-on:keyup.enter="addTodo"
          />
          <button type="button" class="btn btn-info" v-on:click="addTodo">
            新增
          </button>
        </div>
      </div>
      <div class="row">
        <div
          class="input-group mb-3"
          v-for="(item, index) in todo"
          v-bind:key="index"
        >
          <span class="input-group-text" id="basic-addon1"
            >{{ index
            }}<input
              type="checkbox"
              class="form-check-input"
              v-on:click="finishTodo(index)"
          /></span>
          <hr />
          <input
            type="date"
            class="form-control,w-10"
            id="date"
            name="date"
            width="140px"
            v-bind:class="{ 'bg-danger p-1, text-bg-primary': item.status }"
            v-model="item.date"
          />
          <input
            type="text"
            class="form-control"
            v-bind:class="{ 'text-decoration-line-through': item.status }"
            v-model="item.text"
          />
          <button
            type="button"
            class="btn btn-success"
            v-on:click="editTodo(index)"
          >
            存檔
          </button>
          <button
            type="button"
            class="btn btn-danger"
            v-on:click="deleteTodo(index)"
          >
            刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueTodolistView',
  data () {
    return {
      todo: null,
      header: 'TodoList',
      inputValue: {
        todo: '',
        date: ''
      }
    }
  },
  mounted () {
    this.todo = this.$store.getters.tododata
  },
  computed: {},
  methods: {
    addTodo (newTodo) {
      if (this.inputValue.todo === '' || this.inputValue.date === '') {
        return
      }
      this.$store.commit('addTodo', this.inputValue)
    },
    deleteTodo (i) {
      this.$store.commit('deleteTodo', i)
    },
    editTodo (i) {
      this.$store.commit('editTodo', { index: i, newValue: this.todo[i] })
    },
    finishTodo (i) {
      this.$store.commit('finishTodo', i)
    }
  }
}
</script>

<style lang="scss">
.input-row {
  .input-group-prepend {
    .form-control {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
}
.input-group-text {
  .form-check-input {
    margin-bottom: 4px;
    margin-left: 8px;
  }
}
</style>
