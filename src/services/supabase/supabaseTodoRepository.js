import { supabase } from '../../lib/supabaseClient'
import { TodoRepository } from '../interfaces/todoRepository'

export class SupabaseTodoRepository extends TodoRepository {
  async getAll() {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return data.map(this.mapToDomain)
  }

  async updateStatus(id, done) {
    const { error } = await supabase
      .from('todos')
      .update({ done })
      .eq('id', id)

    if (error) throw error
  }

async create(todo) {
  const { data, error } = await supabase
    .from('todos')
    .insert({
      title: todo.title,
      description: todo.description,
      done: false
    })
    .select()
    .single()

  if (error) throw error

  return this.mapToDomain(data)
}

  mapToDomain(row) {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    done: row.done,
    createdAt: row.created_at
      ? new Date(row.created_at).toISOString().split('T')[0]
      : null
  }
}

}