<template>
  <div>
    <h2>Productos</h2>
    
    <!-- Campo de búsqueda -->
    <div class="mb-3">
      <input 
        v-model="searchTerm" 
        type="text" 
        class="form-control" 
        placeholder="Buscar por nombre..."
      />
    </div>
    
    <button class="btn btn-success mb-3" @click="$router.push('/products/new')">Nuevo</button>
    <div v-if="loading" class="alert alert-info">Cargando productos...</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <div v-if="success" class="alert alert-success">{{ success }}</div>
    <div v-if="!loading && products.length === 0" class="alert alert-warning">
      No hay productos. Haz clic en "Nuevo" para agregar uno.
      <div class="mt-2">
        <small>Debug - Total productos: {{ products.length }}</small><br>
        <small>Debug - Filtered: {{ filteredProducts.length }}</small><br>
        <small>Debug - Search term: "{{ searchTerm }}"</small>
      </div>
    </div>

    <div v-if="products.length > 0" class="alert alert-info">
      Mostrando {{ filteredProducts.length }} de {{ products.length }} productos
    </div>

    <ProductTable
      :products="filteredProducts"
      @edit="goEdit"
      @delete="handleDelete"
    />

    <div class="mt-3">
      <button class="btn btn-success" @click="goCreate">Agregar producto</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import productService from '@/services/productService'
import ProductTable from '@/components/ProductTable.vue'
import { useRouter } from 'vue-router'

export default {
  components: { ProductTable },
  setup() {
    const products = ref([])
    const error = ref(null)
    const success = ref(null)
    const loading = ref(false)
    const searchTerm = ref('')
    const router = useRouter()

    const filteredProducts = computed(() => {
      if (!searchTerm.value) {
        return products.value
      }
      return products.value.filter(p => 
        p.name?.toLowerCase().includes(searchTerm.value.toLowerCase())
      )
    })

    const load = async () => {
      loading.value = true
      error.value = null
      try {
        const res = await productService.getAllProducts()
        products.value = res.data
        console.log('Productos cargados:', res.data)
      } catch (err) {
        error.value = 'Error cargando productos: ' + err.message
        console.error('Error completo:', err)
      } finally {
        loading.value = false
      }
    }

    const goEdit = (id) => {
      router.push({ name: 'ProductEdit', params: { id } })
    }

    const goCreate = () => {
      router.push({ name: 'ProductCreate' })
    }

    const handleDelete = async (id) => {
      error.value = null
      success.value = null
      try {
        await productService.deleteProduct(id)
        success.value = 'Producto eliminado correctamente'
        await load()
      } catch (err) {
        error.value = 'Error eliminando producto'
        console.error(err)
      }
    }

    onMounted(load)

    return { products, error, success, loading, searchTerm, filteredProducts, goEdit, goCreate, handleDelete }
  }
}
</script>