<template>
  <div class="modal black-bg">
    <div class="white-bg">
      <h1>모달임</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style>
.black-bg{
  width:100%; height:100%;
  background: rgba(0, 0, 0, 0.5);
}
.white-bg{
  width:20vw; height:15vh;
  background: white;
}
</style>