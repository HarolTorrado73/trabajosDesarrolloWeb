<template>
  <div class="d-flex vh-100">
    <!-- Sidebar -->
    <SidebarComponent />

    <!-- Contenido principal -->
    <div class="flex-grow-1 p-4 bg-light overflow-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue';

export default {
  name: 'DashboardView',
  components: { SidebarComponent }
}
</script>