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
              v-model="newdate"
            />
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="輸入代辦事項"
            v-model="newtodo"
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
          v-bind:key="item.index"
        >
          <span class="input-group-text" id="basic-addon1">{{ index }}</span>
          <hr />
          <input
            type="date"
            class="form-control"
            id="date"
            name="date"
            width="140px"
            v-bind:class="{ '': item.status }"
            v-bind:value="item.date"
            disabled
          />
          <input
            type="text"
            class="form-control"
            v-bind:class="{ 'text-decoration-line-through': item.status }"
            v-bind:value="item.text"
            disabled
          />
          <button
            type="button"
            class="btn btn-success"
            v-on:click="finishTodo(index)"
          >
            已完成
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
      header: 'TodoList',
      newtodo: '',
      newdate: '',
      todo: [{ status: false, text: '看電視', date: '' }]
    }
  },
  methods: {
    addTodo () {
      if (this.newtodo === '' || this.newdate === '') {
        return
      }
      const temp = { status: false, text: this.newtodo, date: this.newdate }
      this.todo.push(temp)
    },
    deleteTodo (i) {
      // addDate () {
      //   if (this.newdate === '') {
      //     return
      //   }
      //   const temp = { status: false, date: this.newdate }
      //   this.todo.push(temp)
      //   console.table(this.todo)
      // },
      const a = 1
      console.log(a)
      this.todo.splice(i, 1)
    },
    finishTodo (i) {
      this.todo[i].status = !this.todo[i].status
      console.table(this.todo)
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
</style>
