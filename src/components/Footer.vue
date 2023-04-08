<template>
  <div class="footer">
    <img src="../assets/detech.png" alt="logo" />
    <router-link to="/about">A propos</router-link>
    <router-link to="/about">Nous contacter</router-link>
    <span class="copyright">© Detech, 2021 - Tous droits réservés</span>
  </div>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style lang="scss">
.footer {
  height: 270px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  .copyright {
    color: #848a92;
  }
  a {
    text-decoration: none;
    color: black;
  }
}
</style>
