<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    HelloWorld: () => import('@/components/HelloWorld')
  }
}
</script>
