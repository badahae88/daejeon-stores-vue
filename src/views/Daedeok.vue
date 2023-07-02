<template>
  <div class="home">
    <h1>대덕구</h1>
    <SearchBar />
    <Card :shops="daedeok" />
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import SearchBar from '@/components/SearchBar.vue'
import { computed, beforeMount } from 'vue'
import data from '@/assets/data.json'
import _ from 'lodash'

export default {
  components: {
    Card,
    SearchBar,
  },
  computed: {
    daedeok() {
      return this.$store.getters.getDaedeok
    },
  },
  beforeMount() {
    const daedeok = _.find(data, { "시군구명": "대덕구" })
    this.$store.commit('SET_DAEDEOK', daedeok)
  },
}
</script>
