<template>
  <div class="user-profile">
    <!-- icon messages -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M19.875 4.5H4.125c-1.036 0-1.875.84-1.875 1.876v11.25c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875V6.376c0-1.036-.84-1.875-1.875-1.875z"
      />
      <path
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M5.25 7.501l6.75 5.25 6.75-5.25"
      />
    </svg>
    <!-- icon notif --><svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M20.047 16.473c-1.203-1.473-2.053-2.223-2.053-6.285 0-3.72-1.9-5.045-3.463-5.688a.835.835 0 01-.466-.495C13.79 3.072 13.022 2.25 12 2.25s-1.791.822-2.063 1.756a.827.827 0 01-.466.494c-1.565.644-3.463 1.965-3.463 5.688-.002 4.061-.852 4.811-2.056 6.285-.498.61-.062 1.527.81 1.527h14.48c.867 0 1.301-.92.805-1.527z"
      />
      <path
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M15 17.999v.75a3 3 0 01-6 0v-.75"
      />
    </svg>
    <router-link to="/profile">
      <v-avatar
        color="rgb(255 255 255)"
        background-color="black"
        rounded
        username="Adrien Lloret"
        :src="require('../assets/moi.png')"
      />
      <div class="name-and-role">
        <p id="name">Adrien</p>
        <p id="role">Detechtive</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { vAvatar } from "@amaury-tobias/v-avatar"

export default {
  name: "Profile",
  components: {
    vAvatar,
  },
}
</script>

<style lang="scss">
.user-profile {
  display: flex;
  flex-direction: row;
  margin-right: 30px;
  align-items: center;
  > * {
    margin-right: 10px;
  }
  a {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    > * {
      margin-right: 10px;
    }
  }
}

.name-and-role {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  #name {
    color: #000000;
    font-weight: bold;
  }
  #role {
    color: #a69e9e;
  }
}
</style>
