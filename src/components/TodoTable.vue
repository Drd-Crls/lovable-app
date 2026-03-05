<template>
  <div class="todo-container">
    <div class="todo-header">
      <h2>Lista de Dates</h2>
      <div>
        <button class="edit-btn" @click="toggleEdit">
          {{ isEditing ? 'Salvar' : 'Editar' }}
        </button>
        <button class="edit-btn" @click="showCreateModal = true">
          + Novo
        </button>
      </div>
    </div>

    <div class="todo-wrapper">
      <table class="todo-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Criado em</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="todo in todos" :key="todo.id">
            <td data-label="ID">{{ todo.id }}</td>

            <td data-label="Título">{{ todo.title }}</td>

            <td data-label="Descrição">{{ todo.description }}</td>

            <td data-label="Status">
              <template v-if="isEditing">
                <label class="checkbox-wrapper">
                  <input
                    type="checkbox"
                    v-model="todo.done"
                  />
                  <span>
                    {{ todo.done ? 'Concluído' : 'Pendente' }}
                  </span>
                </label>
              </template>

              <template v-else>
                <span :class="todo.done ? 'badge-done' : 'badge-pending'">
                  {{ todo.done ? 'Concluído' : 'Pendente' }}
                </span>
              </template>
            </td>

            <td data-label="Criado em">{{ todo.createdAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <CreateTodoModal
  :open="showCreateModal"
  @close="showCreateModal = false"
  @created="handleCreated"
/>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { todoService } from '../services/todoService'
import CreateTodoModal from './CreateTodoModal.vue'

const showCreateModal = ref(false)
const isEditing = ref(false)
const todos = ref([])
const handleCreated = (todo) => {
  todos.value.unshift(todo)
}
onMounted(async () => {
  try {
    todos.value = await todoService.listTodos()
  } catch (err) {
    console.error('Erro ao carregar todos:', err)
  }
})

const toggleEdit = async () => {
  isEditing.value = !isEditing.value

  if (!isEditing.value) {
    try {
      await Promise.all(
        todos.value.map(todo =>
          todoService.toggleStatus(todo.id, todo.done)
        )
      )

      console.log('Alterações salvas!')
    } catch (err) {
      console.error('Erro ao salvar:', err)
    }
  }
}
</script>

<style scoped>
/* ===== CONTAINER ===== */
.todo-container {
  background: #07070b;
  border: 1px solid #1f1f2b;
  border-radius: 20px;
  padding: 24px;
}

.todo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.edit-btn {
  background: #ff3b3b;
  border: none;
  padding: 10px 18px;
  margin: 0 4px;
  border-radius: 999px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

.edit-btn:hover {
  background: #ff5252;
}

/* ===== TABELA ===== */
.todo-wrapper {
  width: 100%;
  overflow-x: auto;
}

.todo-table {
  width: 100%;
  border-collapse: collapse;
}

.todo-table th {
  text-align: left;
  padding: 12px;
  color: #9ca3af;
  font-size: 14px;
  border-bottom: 1px solid #1f1f2b;
}

.todo-table td {
  padding: 14px 12px;
  border-bottom: 1px solid #14141c;
}

/* ===== BADGES ===== */
.badge-done {
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
}

.badge-pending {
  background: rgba(255, 59, 59, 0.15);
  color: #ff3b3b;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* ================= MOBILE RESPONSIVO ================= */
@media (max-width: 768px) {
  .todo-table thead {
    display: none;
  }

  .todo-table,
  .todo-table tbody,
  .todo-table tr,
  .todo-table td {
    display: block;
    width: 100%;
  }

  .todo-table tr {
    background: #0b0b0f;
    border: 1px solid #1f1f2b;
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 16px;
  }

  .todo-table td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    border: none;
    font-size: 14px;
  }

  .todo-table td::before {
    content: attr(data-label);
    font-weight: 600;
    color: #ff3b3b;
    margin-right: 12px;
  }
}
</style>