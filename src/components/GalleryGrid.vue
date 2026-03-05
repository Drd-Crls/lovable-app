<template>
  <div class="gallery-container">
    <div class="gallery-header">
      <h2>Galeria</h2>

      <button class="edit-btn" @click="toggleEdit">
        {{ isEditing ? 'Salvar ordem' : 'Editar ordem' }}
      </button>
    </div>

    <!-- GRID / DRAG AREA -->
    <draggable
      v-model="photos"
      item-key="id"
      :disabled="!isEditing"
      class="gallery-grid"
      ghost-class="drag-ghost"
      animation="200"
    >
      <template #item="{ element }">
        <div class="polaroid-card">
          <div class="photo-wrapper">
            <img :src="element.url" :alt="element.title" />
          </div>

          <div class="polaroid-footer">
            <span class="photo-title">{{ element.title }}</span>
          </div>

          <div v-if="isEditing" class="drag-handle">⋮⋮</div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'

const isEditing = ref(false)

const toggleEdit = () => {
  isEditing.value = !isEditing.value

  if (!isEditing.value) {
    console.log('Nova ordem:', photos.value)
  }
}

const photos = ref([
  {
    id: 1,
    title: 'Memória 1',
    url: 'images/img1.jpeg'
  },
  {
    id: 2,
    title: 'Memória 2',
    url: 'images/img2.jpeg'
  },
  {
    id: 3,
    title: 'Memória 3',
    url: 'images/img3.jpeg'
  },
  {
    id: 4,
    title: 'Memória 4',
    url: 'images/img4.jpeg'
  },
  {
    id: 5,
    title: 'Memória 5',
    url: 'images/img5.jpeg'
  }
])
</script>

<style scoped>
/* ===== CONTAINER ===== */
.gallery-container {
  padding: 24px;
}

.gallery-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.edit-btn {
  background: #ff3b3b;
  border: none;
  padding: 10px 18px;
  border-radius: 999px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

.edit-btn:hover {
  background: #ff5252;
}

/* ===== GRID ===== */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

/* ===== POLAROID CARD ===== */
.polaroid-card {
  position: relative;
  background: #0b0b0f;
  border: 1px solid #1f1f2b;
  border-radius: 16px;
  padding: 14px 14px 22px 14px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
  transition: all 0.25s ease;
}

.polaroid-card:hover {
  transform: translateY(-6px) rotate(-1deg);
  border-color: rgba(255, 59, 59, 0.4);
}

.photo-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 12px;
}

.photo-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.polaroid-footer {
  text-align: center;
}

.photo-title {
  font-size: 13px;
  color: #e5e7eb;
}

/* ===== DRAG HANDLE ===== */
.drag-handle {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 18px;
  color: #ff3b3b;
  cursor: grab;
  user-select: none;
}

.drag-ghost {
  opacity: 0.4;
}

/* ===== RESPONSIVO ===== */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
