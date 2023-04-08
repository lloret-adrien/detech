<template>
  <form id="login-form" action="" method="post">
    <div class="input_left">
      <div class="input_icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <g opacity=".25">
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M16.125 6.749c-.184 2.478-2.063 4.5-4.125 4.5-2.063 0-3.945-2.021-4.125-4.5-.188-2.578 1.64-4.5 4.125-4.5 2.484 0 4.312 1.969 4.125 4.5z"
            />
            <path
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="1.5"
              d="M12 14.25c-4.078 0-8.217 2.25-8.983 6.497-.093.512.197 1.003.733 1.003h16.5c.536 0 .826-.491.733-1.003C20.218 16.5 16.078 14.25 12 14.25z"
            />
          </g>
        </svg>
      </div>
      <input type="text" placeholder="Identifiant" />
    </div>
    <div class="input_left">
      <div class="input_icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <g clip-path="url(#clip0)" opacity=".25">
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15.75 9.75V5.297a3.75 3.75 0 00-7.5 0V9.75"
            />
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M17.25 9.749H6.75a2.25 2.25 0 00-2.25 2.25v8.25a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25v-8.25a2.25 2.25 0 00-2.25-2.25z"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <input type="password" placeholder="Mot de passe" />
    </div>
    <input type="submit" value="Se connecter" />
  </form>
</template>

<script>
export default {
  name: "LoginForm",
}
</script>

<style lang="scss">
#login-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 150px;
  input[type="submit"] {
    background: linear-gradient(90deg, #6c70cb, #6c8ccc);
    border: none;
    border-radius: 50px;
    height: 35px;
    color: #393939;
    cursor: pointer;
  }
}
</style>
