<template>
  <div class="home">
    <HelloWorld />
    <div></div>
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
