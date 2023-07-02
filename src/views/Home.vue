<template>
  <div class="home">
    <h1>대전전체</h1>
    <SearchBar />
    <Card :shops=$store.state.data />  
  </div>

</template>

<script>
import Card from '@/components/Card.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  components: {
    Card,
    SearchBar,
  }
}
</script>
