import { SupabaseTodoRepository } from './supabase/supabaseTodoRepository'

const repository = new SupabaseTodoRepository()

export const todoService = {
  async listTodos() {
    return repository.getAll()
  },

  async toggleStatus(id, done) {
    return repository.updateStatus(id, done)
  },
 
    async createTodo(payload) {
        return repository.create(payload)
    }
}