<template>
  <div class="content">
    <router-link to="/profile">Profile <span class="fa fa-arrow-right"></span> </router-link>
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.content {
  width: 320px;
  height: 220px;
  background: #fff;
  text-align: center;
  padding: 50px;
  box-shadow: 2px 6px 12px 6px #0101;
}

.content a {
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  color: blue;
}
</style>