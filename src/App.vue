<script>
import SearchBar from "@/components/SearchBar.vue"
// import LoginForm from "./components/LoginForm.vue"

export default {
  components: {
    SearchBar,
    // LoginForm,
  },
}
</script>

<template>
  <div id="app">
    <div class="fake_bar"></div>
    <div id="hoverBar">
      <div class="left_bar">
        <div id="logo">
          <img src="./assets/detech.png" alt="test" />
          <SearchBar id="search"></SearchBar>
          <!-- <LoginForm /> -->
        </div>
        <nav>
          <ol class="link">
            <li>
              <router-link to="/"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="42"
                  fill="none"
                  viewBox="0 0 40 42"
                >
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M24.63 2.655L7.5 24.458h10l-2.462 13.937a.195.195 0 00.04.155.184.184 0 00.142.068v0a.181.181 0 00.148-.077L32.5 16.734h-10l2.474-13.938a.204.204 0 00-.047-.155.193.193 0 00-.144-.067v0a.185.185 0 00-.152.08v0z"
                  />
                </svg>
                <span>Débats</span></router-link
              >
            </li>
            <li>
              <router-link to="/conseil"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                    d="M33.672 25.047c-.078-.28.093-.671.258-.953.05-.083.104-.164.163-.242a12.656 12.656 0 002.157-7.055c.023-7.203-6.055-13.046-13.57-13.046-6.555 0-12.024 4.46-13.305 10.382a12.555 12.555 0 00-.29 2.672c0 7.211 5.845 13.211 13.36 13.211 1.195 0 2.805-.36 3.688-.601a24.722 24.722 0 001.984-.649 2.067 2.067 0 011.516.024l4.43 1.57c.096.041.2.067.304.078a.625.625 0 00.625-.625 1.008 1.008 0 00-.04-.21l-1.28-4.556z"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                    d="M5.192 18.127a11.425 11.425 0 00.5 11.928c.18.272.281.483.25.625-.031.141-.932 4.833-.932 4.833a.625.625 0 00.212.6c.114.092.257.14.403.14a.568.568 0 00.227-.047l4.392-1.72c.302-.118.64-.113.937.016 1.48.577 3.116.938 4.753.938a12.437 12.437 0 006.254-1.679"
                  />
                </svg>
                <span>Conseils en Droit</span></router-link
              >
            </li>
            <li>
              <router-link to="/temoignages"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <path
                    stroke="#000"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M28.75 3.752h-17.5a3.75 3.75 0 00-3.75 3.75v25a3.75 3.75 0 003.75 3.75h17.5a3.75 3.75 0 003.75-3.75v-25a3.75 3.75 0 00-3.75-3.75z"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13.75 10h12.5M13.75 16.251h12.5M13.75 22.5H20"
                  />
                </svg>

                <span>Témoignages</span></router-link
              >
            </li>
            <li>
              <router-link to="/tuto"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M2.5 14.998l17.5-10 17.5 10-17.5 10-17.5-10z"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8.75 18.748v10L20 34.998l11.25-6.25v-10M37.5 28.749v-13.75M20 24.996v10"
                  />
                </svg>
                <span>Tutoriels</span></router-link
              >
            </li>
            <li>
              <router-link to="/leaderboard"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="41"
                  fill="none"
                  viewBox="0 0 40 41"
                >
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13.75 36.733h12.5M20 36.736v-10M30 17.984c0-3.956-.006-10.518-.01-12.5a1.25 1.25 0 00-1.25-1.25l-17.483.02a1.25 1.25 0 00-1.25 1.247c0 2.389-.01 10.09-.01 12.483 0 5.022 6.484 8.75 10 8.75 3.515 0 10.003-3.728 10.003-8.75z"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M10 7.981H3.75v1.25c0 4.314 2.621 8.75 6.25 8.75M30 7.981h6.25v1.25c0 4.314-2.621 8.75-6.25 8.75"
                  />
                </svg>

                <span>Classements</span></router-link
              >
            </li>
            <li>
              <router-link to="/profile"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M20.492 15.025a5 5 0 104.484 4.484 5.01 5.01 0 00-4.484-4.484v0zM32.53 20a12.043 12.043 0 01-.12 1.625l3.532 2.77a.844.844 0 01.192 1.074l-3.342 5.781a.844.844 0 01-1.026.36l-3.508-1.413a1.259 1.259 0 00-1.185.136c-.536.369-1.098.697-1.683.98a1.246 1.246 0 00-.69.948l-.525 3.742a.867.867 0 01-.834.716h-6.683a.868.868 0 01-.835-.693l-.525-3.736a1.257 1.257 0 00-.703-.954 12.138 12.138 0 01-1.677-.982 1.25 1.25 0 00-1.18-.134l-3.507 1.412a.845.845 0 01-1.027-.358l-3.341-5.781a.844.844 0 01.191-1.074l2.985-2.344a1.254 1.254 0 00.469-1.1 10.652 10.652 0 010-1.941 1.25 1.25 0 00-.474-1.09L4.05 15.601a.845.845 0 01-.185-1.07l3.341-5.78a.845.845 0 011.027-.36l3.508 1.413a1.259 1.259 0 001.185-.136 12.849 12.849 0 011.683-.98 1.246 1.246 0 00.689-.948l.526-3.742a.865.865 0 01.834-.716h6.683a.868.868 0 01.835.693l.525 3.736a1.255 1.255 0 00.703.954c.584.282 1.145.61 1.676.982a1.25 1.25 0 001.181.134l3.507-1.412a.844.844 0 011.027.358l3.341 5.781a.843.843 0 01-.191 1.075l-2.986 2.343a1.255 1.255 0 00-.472 1.1c.026.324.043.649.043.974z"
                  />
                </svg>

                <span>Paramètres</span></router-link
              >
            </li>
            <li>
              <router-link to="/live">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M29.28 24.123l6.462 4.548A1.25 1.25 0 0037.5 27.53V12.47a1.25 1.25 0 00-1.758-1.141l-6.462 4.548a1.25 1.25 0 00-.53 1.022V23.1a1.25 1.25 0 00.53 1.022z"
                  />
                  <path
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                    d="M20.937 29.997H6.562A4.074 4.074 0 012.5 25.935V14.06a4.074 4.074 0 014.062-4.063h14.413A4.038 4.038 0 0125 14.022v11.913a4.074 4.074 0 01-4.063 4.062z"
                  />
                </svg>
                <span>Direct</span></router-link
              >
            </li>
          </ol>
        </nav>
        <div class="logout">
          <ol class="link">
            <li>
              <router-link to="/#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M25 13.75v-3.125A3.125 3.125 0 0021.875 7.5h-15a3.125 3.125 0 00-3.125 3.125v18.75A3.125 3.125 0 006.875 32.5h15A3.125 3.125 0 0025 29.375V26.25M30 13.75L36.25 20 30 26.25M14.922 20H36.25"
                  />
                </svg>
                <span> Déconnexion</span></router-link
              >
            </li>
          </ol>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background-color: #f0f0f0;
}
* {
  margin: 0;
}

.link {
  list-style: none;
  padding: 0;

  li {
    padding-bottom: 10px;
  }

  span {
    padding-left: 30px;
  }

  a {
    height: 40px;
    align-items: center;
    display: flex;
    border: solid 1px rgba($color: #000000, $alpha: 0);
    color: black;
    text-decoration-line: none;
    &:hover,
    &.router-link-exact-active {
      background-color: rgba($color: #83aaff, $alpha: 0.44);
      cursor: pointer;
      border: solid 1px rgba($color: #007ae9, $alpha: 0.5);
    }

    svg {
      width: 30px;
      height: 30px;
      padding-left: 35px;
    }
  }
}

.fake_bar {
  //invisible bar for the right dimensions of content, because left_bar in pos fixed is not considered in his parent
  position: relative;
  height: 100vh;
}

#logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    padding: 15px;
    transition: transform 0.25s;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: row;
}

img {
  -webkit-user-drag: none;
}

button,
input {
  outline: none;
}

h1,
h2,
h3 {
  font-family: serif;
  color: black;
}

.input_left {
  display: flex;
  flex-direction: row;
  input {
    border-radius: 0px 50px 50px 0px;
    background-color: rgba($color: #c4c4c4, $alpha: 0.5);
    height: 35px;
    width: 165px;
    color: rgba($color: #7c7979, $alpha: 0.5);
    border: none;
    padding: 0 0 0 5px;
  }
}

.input_icon {
  background-color: rgba($color: #c4c4c4, $alpha: 0.5);
  border-radius: 50px 0px 0px 50px;
  border-right: solid 1px #d0d0d0;
  height: 35px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid_row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.user {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  .who {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    h1 {
      font-size: 18px;
    }
  }
  svg {
    position: absolute;
    top: 0;
    right: 0;
    &:hover {
      fill: black;
    }
  }
}

#hoverBar {
  min-width: 275px;
  width: 275px;
  height: 100vh;
  overflow: hidden;
  border-right: solid 1px #bfbfbf;
  position: fixed;
  transition: transform 0.25s;
  z-index: 10;
}

.left_bar {
  position: fixed;
  height: 100vh;
  width: 275px;
  min-width: 275px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: overlay;
  transition: transform 0.25s;
  background-color: #f0f0f0;
  > * {
    width: 100%;
  }
}

@media only screen and (max-width: 1200px) {
  .fake_bar {
    width: 71px;
  }
  .container {
    width: calc(100% - 71px);
  }
  #hoverBar {
    transform: translateX(-205px);
  }
  .left_bar {
    transform: translateX(190px);
  }
  #logo img {
    transform: translateX(-38px);
  }
  #search {
    visibility: hidden;
  }

  #hoverBar:hover {
    transition-delay: 0.1s;
    transform: translateX(0);
    .left_bar {
      transition-delay: 0.1s;
      transform: translateX(0);
    }
    #logo img {
      transform: translateX(0);
      transition-delay: 0.1s;
    }
    #search {
      visibility: visible;
    }
  }
}

@media only screen and (min-width: 1200px) {
  .left_bar,
  #hoverBar {
    transform: translateX(0);
  }
  .fake_bar {
    width: 275px;
  }
  .container {
    width: calc(100% - 275px);
  }
  #logo img {
    transform: translateX(0);
  }
  #search {
    visibility: visible;
  }
}
</style>
