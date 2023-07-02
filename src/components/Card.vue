<template>
<div class="card-container row">
  <div :v-if="shops"
    class="card col-lg-3 col-md-4 col-sm-6" 
    v-for="shop in shops" :key="shop.상가업소번호"
    >
    <span>{{ shop.상권업종소분류명}}</span>
    <h1 class="title">{{ shop.상호명 }}</h1>
    <p>{{ shop.지번주소}}</p>
  </div>
</div>


</template>

<script>
export default {
  props: {
    shops: Object
  },
}
</script>

<style>
.card-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  border: none;
  border-radius: 5px;
  width: 20rem;
  margin: 2rem;
  padding: 1rem;
  flex: 0 0 auto;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
}
.title{
  font-size: 1.5rem;
}
</style>