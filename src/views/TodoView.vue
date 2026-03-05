<template>
  <div class="todo-page">
    <h2 class="title">Lista de Dates</h2>
    <TodoTable />
  </div>
</template>

<script setup>
import TodoTable from '../components/TodoTable.vue'
</script>

<style scoped>
.title {
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 700;
}
</style>