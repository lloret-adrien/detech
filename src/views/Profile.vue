<template>
  <div class="container" id="profile">
    <div class="profile-header">
      <div class="profile-pics">
        <div class="banner">
          <img src="banniere.png" alt="Bannière du profil" />
        </div>
        <div class="avatar">
          <v-avatar
            rounded
            :size="102"
            username="Adrien Lloret"
            src="moi.png"
          />
          <!-- svg camera -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="none"
            viewBox="0 0 27 27"
          >
            <circle cx="13.5" cy="13.5" r="13.5" fill="#fff" />
            <path
              fill="#292929"
              d="M7.383 8.694h2.756l.268-.804c.17-.506.641-.847 1.175-.847h2.662c.534 0 1.006.34 1.175.847l.268.804h.665v-.688c0-.53.432-.963.963-.963h.55c.532 0 .963.432.963.963v.738c.649.17 1.128.762 1.128 1.463v7.154c0 .834-.678 1.513-1.513 1.513H7.383a1.515 1.515 0 01-1.513-1.513v-7.154c0-.834.678-1.513 1.513-1.513zm10.62-.688a.138.138 0 00-.137-.137h-.55a.138.138 0 00-.138.137v.688h.825v-.688zM6.695 17.361c0 .38.309.688.688.688h11.06c.38 0 .688-.309.688-.688v-7.154a.689.689 0 00-.688-.687H15.39a.413.413 0 01-.391-.283l-.362-1.086a.412.412 0 00-.392-.282h-2.662a.412.412 0 00-.392.282l-.362 1.086a.413.413 0 01-.391.283H7.383a.689.689 0 00-.688.688v7.153z"
            />
            <path
              fill="#2D2D2D"
              d="M7.96 11.17a.413.413 0 110-.825.413.413 0 010 .825zM17.04 10.345h.826a.413.413 0 010 .825h-.826a.413.413 0 010-.825zM12.913 17.224a3.719 3.719 0 003.714-3.715 3.719 3.719 0 00-3.714-3.714A3.719 3.719 0 009.2 13.509a3.719 3.719 0 003.714 3.715zm0-6.604a2.892 2.892 0 012.889 2.89 2.892 2.892 0 01-2.889 2.888 2.892 2.892 0 01-2.889-2.889 2.892 2.892 0 012.89-2.889z"
            />
            <path
              fill="#2D2D2D"
              d="M12.913 15.573a2.066 2.066 0 002.064-2.064 2.066 2.066 0 00-2.064-2.063 2.066 2.066 0 00-2.063 2.063c0 1.138.925 2.064 2.063 2.064zm0-3.302a1.24 1.24 0 011.238 1.238 1.24 1.24 0 01-1.238 1.238 1.24 1.24 0 01-1.238-1.238 1.24 1.24 0 011.238-1.238z"
            />
          </svg>
        </div>
        <!-- svg camera -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="53"
          height="53"
          fill="none"
          viewBox="0 0 53 53"
        >
          <circle cx="26.5" cy="26.5" r="26.5" fill="#fff" />
          <path
            fill="#292929"
            d="M14.492 17.067h5.411l.526-1.58a2.428 2.428 0 012.306-1.661h5.226c1.047 0 1.974.668 2.305 1.662l.526 1.579H32.1v-1.35c0-1.043.848-1.891 1.89-1.891h1.08c1.042 0 1.89.848 1.89 1.89v1.448a2.975 2.975 0 012.215 2.873v14.042a2.974 2.974 0 01-2.97 2.97H14.491a2.974 2.974 0 01-2.97-2.97V20.037a2.974 2.974 0 012.97-2.97zm20.847-1.35a.27.27 0 00-.27-.27h-1.08a.27.27 0 00-.27.27v1.35h1.62v-1.35zM13.142 34.078c0 .745.606 1.35 1.35 1.35h21.711c.745 0 1.35-.605 1.35-1.35V20.037c0-.744-.605-1.35-1.35-1.35h-5.995a.81.81 0 01-.768-.554L28.73 16a.81.81 0 00-.77-.554h-5.225a.809.809 0 00-.768.554l-.711 2.133a.81.81 0 01-.769.554h-5.995c-.744 0-1.35.605-1.35 1.35v14.042z"
          />
          <path
            fill="#2D2D2D"
            d="M15.626 21.927a.81.81 0 110-1.62.81.81 0 010 1.62zM33.449 20.307h1.62a.81.81 0 010 1.62h-1.62a.81.81 0 010-1.62zM25.348 33.81c4.02 0 7.29-3.272 7.29-7.292s-3.27-7.291-7.29-7.291-7.291 3.27-7.291 7.291c0 4.02 3.27 7.291 7.29 7.291zm0-12.963a5.677 5.677 0 015.67 5.671 5.677 5.677 0 01-5.67 5.67 5.677 5.677 0 01-5.671-5.67 5.677 5.677 0 015.67-5.67z"
          />
          <path
            fill="#2D2D2D"
            d="M25.348 30.569a4.055 4.055 0 004.05-4.051 4.055 4.055 0 00-4.05-4.05 4.055 4.055 0 00-4.05 4.05 4.055 4.055 0 004.05 4.05zm0-6.481c1.34 0 2.43 1.09 2.43 2.43s-1.09 2.43-2.43 2.43-2.43-1.09-2.43-2.43 1.09-2.43 2.43-2.43z"
          />
        </svg>
      </div>
      <div class="profile-info">
        <h1>Adrien L.</h1>
        <h2>UX/UI Designer - Detechtive</h2>
        <p>Paris, France</p>
        <div class="profile-stats">
          <div class="profile-about">
            <h2>About Me</h2>
            <textarea disabled max-length="500">
              UX design is all about identifying and solving user problems; UI
              design is all about creating intuitive, aesthetically-pleasing,
              interactive interfaces. UX design usually comes first in the
              product development process, followed by UI. The UX designer maps
              out the bare bones of the user journey
            </textarea>
            <!-- svg modif -->
            <svg
              @click="editAbout()"
              id="edit"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              fill="none"
              viewBox="0 0 20 21"
            >
              <path
                fill="#1666C5"
                d="M1.492 16.062h.109l5.236-1.14a.515.515 0 00.272-.135l8.871-8.872a3.419 3.419 0 001.004-2.442 3.528 3.528 0 00-1.004-2.469A3.419 3.419 0 0013.54 0a3.337 3.337 0 00-2.442 1.031L2.252 9.903a.488.488 0 00-.163.244L.95 15.384c-.03.188.03.38.163.515.1.102.237.16.38.163zM13.54 1.085a2.36 2.36 0 012.36 2.36v.028a2.279 2.279 0 01-.678 1.655l-3.337-3.364a2.333 2.333 0 011.655-.679zM11.124 2.55l3.337 3.338-7.732 7.705-3.338-3.31 7.733-7.733zm-8.167 8.818l2.686 2.686-3.445.76.76-3.446zM18.72 18.992H.544a.543.543 0 100 1.085H18.72a.543.543 0 100-1.085z"
              />
            </svg>
            <div class="modif-about">
              <!-- svg valid -->
              <svg
                @click="saveEdit()"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#17A400"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M19.5 6L9 18l-4.5-4.5"
                />
              </svg>
              <!-- svg cancel -->
              <svg
                @click="cancelEdit()"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#FF0303"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 17.25L6.75 6.75M17.25 6.75l-10.5 10.5"
                />
              </svg>
            </div>
          </div>
          <div class="stats">
            <div class="followers">
              <img src="followers.png" alt="followers" />
              <h1>16,6K</h1>
            </div>
            <div class="points">
              <img src="points.png" alt="followers" />
              <h1>300</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <grid-layout
      :layout="layout"
      :col-num="6"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="false"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 12]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :key="item.i"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <Card
          v-for="item in items"
          :key="item.id"
          :subject="item.subject"
          :resume="item.resume"
          :username="item.username"
          :theme="item.theme"
          :date="item.date"
          :image="item.image.source"
        />
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import { vAvatar } from "@amaury-tobias/v-avatar";
import Card from "@/components/Card.vue";
import { GridLayout, GridItem } from "vue-grid-layout";

export default {
  name: "Avis",
  components: {
    vAvatar,
    Card,
    GridLayout,
    GridItem,
  },
  data() {
    return {
      contentAbout: "", //sauvegarde pour remmetre le contenu de base si l'on annule l'édition
      items: [
        {
          id: 1,
          username: "Adrien Lloret",
          image: {
            source: "/productivity.png",
          },
          subject: "7 Skills of Highly Effective Programmers",
          resume:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aperiam facilis laborum nihil consequatur ab maxime praesentium possimus nostrum, dicta deleniti id explicabo debitis, officia iure velit hic. Eum, est?",
          theme: "FRONT END",
          date: "17 day ago",
        },
        // {
        //   id: 2,
        //   username: "Adrien Lloret",
        //   image: {
        //     source: "/media.png",
        //   },
        //   subject: "7 Skills of Highly Effective Programmers",
        //   resume:
        //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aperiam facilis laborum nihil consequatur ab maxime praesentium possimus nostrum, dicta deleniti id explicabo debitis, officia iure velit hic. Eum, est?",
        //   theme: "FRONT END",
        //   date: "17 day ago",
        // },
      ],
      layout: [
        { x: 0, y: 0, w: 3, h: 10, i: "0" },
        { x: 1, y: 0, w: 3, h: 10, i: "1" },
        { x: 0, y: 1, w: 3, h: 10, i: "2" },
      ],
    };
  },
  methods: {
    cancelEdit() {
      const svgEdit = document.getElementById("edit");
      const CancelOrSave = document.getElementsByClassName("modif-about")[0];
      const textarea = document.getElementsByTagName("textarea")[0];
      // ----------------- //
      textarea.value = this.contentAbout; //remettre le contenu de base
      svgEdit.style.visibility = "visible";
      CancelOrSave.style.visibility = "hidden";
      textarea.setAttribute("disabled", "true");
      textarea.setAttribute("height", textarea.value.height);
    },
    saveEdit() {
      const svgEdit = document.getElementById("edit");
      const CancelOrSave = document.getElementsByClassName("modif-about")[0];
      const textarea = document.getElementsByTagName("textarea")[0];
      // ----------------- //
      //mettre à jour dans la base de données
      svgEdit.style.visibility = "visible";
      CancelOrSave.style.visibility = "hidden";
      textarea.setAttribute("disabled", "true");
    },
    editAbout() {
      const svgEdit = document.getElementById("edit");
      const CancelOrSave = document.getElementsByClassName("modif-about")[0];
      const textarea = document.getElementsByTagName("textarea")[0];
      // ----------------- //
      svgEdit.style.visibility = "hidden";
      CancelOrSave.style.visibility = "visible";
      this.contentAbout = textarea.value;
      textarea.removeAttribute("disabled");
    },
  },
};
</script>

<style lang="scss">
.container#profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-header {
  background-color: white;
  width: 835px;
  border-radius: 0 0 10px 10px;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.25);
  svg {
    cursor: pointer;
  }
}

.profile-pics {
  position: relative;
  .banner {
    overflow: hidden;
  }
  .avatar {
    position: absolute;
    bottom: -30px;
    left: 30px;
  }
  svg {
    position: absolute;
    bottom: 2px;
    right: 2px;
    &:hover {
      circle {
        fill: rgba(128, 128, 128, 0.637);
      }
    }
  }
}

.profile-info {
  margin: 35px 30px 20px 30px;
  text-align: start;
  * {
    margin-bottom: 5px;
  }
}

.profile-about {
  z-index: 1;
  background-color: #f3f3f3;
  border-radius: 10px;
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 15px;
  margin-top: 20px;
  > svg,
  .modif-about {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  textarea {
    resize: none;
    background-color: #f3f3f3;
    border: none;
    outline: none;
    height: 70px;
  }
}
.modif-about {
  visibility: hidden;
}
.profile-stats {
  position: relative;
}

.stats {
  user-select: none;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: -150px;
  right: 0;
  .followers {
    position: relative;
  }
  .points {
    position: relative;
  }
  h1 {
    color: #a7a6a6;
    font-size: 50px;
    position: absolute;
    top: 30%;
    left: 40px;
  }
}
.vue-grid-item {
  // background-color: antiquewhite;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  &.vue-grid-placeholder {
    background-color: grey;
  }
}

.vue-grid-layout {
  width: 835px;
  // padding: 15px;
  // margin: 0 50px 0 50px;
}
</style>
