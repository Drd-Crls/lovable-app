<template>
  <div v-if="open" class="modal-overlay">
    <div class="modal-card">
      <h3>Novo Date ❤️</h3>

      <input
        v-model="title"
        placeholder="Título"
        class="input"
      />

      <textarea
        v-model="description"
        placeholder="Descrição"
        class="input"
      />

      <div class="actions">
        <button class="btn-cancel" @click="$emit('close')">
          Cancelar
        </button>

        <button class="btn-save" @click="handleCreate">
          Criar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { todoService } from '../services/todoService'

const props = defineProps({
  open: Boolean
})

const emit = defineEmits(['close', 'created'])

const title = ref('')
const description = ref('')

const handleCreate = async () => {
  if (!title.value) return

  try {
    const newTodo = await todoService.createTodo({
      title: title.value,
      description: description.value
    })

    emit('created', newTodo)
    emit('close')

    title.value = ''
    description.value = ''
  } catch (err) {
    console.error('Erro ao criar:', err)
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-card {
  width: 100%;
  max-width: 420px;
  background: #0b0b0f;
  border: 1px solid #1f1f2b;
  border-radius: 20px;
  padding: 24px;
}

.input {
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #222;
  background: #07070b;
  color: white;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
}

.btn-save {
  background: #ff3b3b;
  border: none;
  padding: 10px 18px;
  border-radius: 999px;
  color: white;
  cursor: pointer;
}

.btn-cancel {
  background: transparent;
  border: 1px solid #333;
  padding: 10px 18px;
  border-radius: 999px;
  color: #aaa;
  cursor: pointer;
}
</style>