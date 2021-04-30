<template>
  <div class="filter-content">
    <div class="filter-bar">
      <button id="back-filter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="9"
          fill="none"
          viewBox="0 0 13 9"
        >
          <path
            fill="#93BACE"
            d="M11.999 3.253H2.725l1.84-1.86A.817.817 0 004.8.816a.827.827 0 00-.235-.577A.803.803 0 003.997 0a.793.793 0 00-.568.239l-3.2 3.25a.814.814 0 00-.169.268.824.824 0 000 .618c.038.1.095.19.168.268l3.2 3.25a.8.8 0 00.569.24.79.79 0 00.568-.24.813.813 0 00.237-.577.823.823 0 00-.237-.577l-1.84-1.86h9.274a.794.794 0 00.566-.239.819.819 0 000-1.149.794.794 0 00-.566-.238z"
          />
        </svg>
      </button>
      <div class="filters" id="drag-content" @dragstart="onDrag">
        <div
          class="white notSelect"
          @mousedown.self="scaleFilter"
          @mouseup.self="selectFilter"
        >
          UI
          <span class="svgDelete" @click.self="deleteFilter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="#00A3FF"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M15.75 9A6.752 6.752 0 009 2.25 6.752 6.752 0 002.25 9 6.752 6.752 0 009 15.75 6.752 6.752 0 0015.75 9z"
              />
              <path
                stroke="#00A3FF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M11.25 11.25l-4.5-4.5M6.75 11.25l4.5-4.5"
              />
            </svg>
          </span>
        </div>
        <div
          class="white notSelect"
          @mousedown.self="scaleFilter"
          @mouseup.self="selectFilter"
        >
          UX
          <span class="svgDelete" @click.self="deleteFilter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="#00A3FF"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M15.75 9A6.752 6.752 0 009 2.25 6.752 6.752 0 002.25 9 6.752 6.752 0 009 15.75 6.752 6.752 0 0015.75 9z"
              />
              <path
                stroke="#00A3FF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M11.25 11.25l-4.5-4.5M6.75 11.25l4.5-4.5"
              />
            </svg>
          </span>
        </div>
        <div
          class="white notSelect"
          @mousedown.self="scaleFilter"
          @mouseup.self="selectFilter"
        >
          C#
          <span class="svgDelete" @click.self="deleteFilter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="#00A3FF"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M15.75 9A6.752 6.752 0 009 2.25 6.752 6.752 0 002.25 9 6.752 6.752 0 009 15.75 6.752 6.752 0 0015.75 9z"
              />
              <path
                stroke="#00A3FF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M11.25 11.25l-4.5-4.5M6.75 11.25l4.5-4.5"
              />
            </svg>
          </span>
        </div>
        <div
          class="white notSelect"
          @mousedown.self="scaleFilter"
          @mouseup.self="selectFilter"
        >
          Web
          <span class="svgDelete" @click.self="deleteFilter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="#00A3FF"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M15.75 9A6.752 6.752 0 009 2.25 6.752 6.752 0 002.25 9 6.752 6.752 0 009 15.75 6.752 6.752 0 0015.75 9z"
              />
              <path
                stroke="#00A3FF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M11.25 11.25l-4.5-4.5M6.75 11.25l4.5-4.5"
              />
            </svg>
          </span>
        </div>
      </div>
      <div style="position: relative">
        <button id="add-filter" @click="showContent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="13"
            fill="none"
            viewBox="0 0 14 13"
          >
            <path
              fill="#fff"
              d="M13.452 1.173h-8.34A1.723 1.723 0 003.48 0C2.723 0 2.079.492 1.85 1.173H.548a.548.548 0 000 1.095H1.85c.229.681.873 1.174 1.63 1.174.758 0 1.402-.493 1.631-1.174h8.341a.548.548 0 100-1.095zM3.481 2.346a.626.626 0 110-1.252.626.626 0 010 1.252zM13.452 5.705H12.15a1.723 1.723 0 00-1.63-1.173c-.758 0-1.402.492-1.631 1.173H.548a.548.548 0 000 1.095h8.34c.23.681.874 1.173 1.631 1.173.758 0 1.402-.492 1.631-1.173h1.302a.548.548 0 100-1.095zM10.52 6.878a.626.626 0 11.002-1.252.626.626 0 01-.002 1.252zM13.452 10.237H7.458a1.723 1.723 0 00-1.631-1.173c-.758 0-1.402.492-1.631 1.173H.548a.548.548 0 000 1.095h3.648c.23.681.873 1.173 1.63 1.173.758 0 1.402-.492 1.632-1.173h5.994a.548.548 0 100-1.095zM5.827 11.41a.626.626 0 11.001-1.253.626.626 0 01-.001 1.253z"
            />
          </svg>
          <span>More Filters</span>
        </button>
        <div class="bubble-add" @mouseleave="hideFilters">
          <div class="arrow"></div>
          <div class="add">
            <input
              id="filter-value"
              type="text"
              placeholder="Défini un filtre"
              autocomplete="off"
            />
            <input type="submit" value="Add" @click="addFilter" />
          </div>
          <div class="not-use" @click="useFilter">
            <div class="white notSelect">
              Angular
            </div>
            <div class="white notSelect">
              Vue
            </div>
            <div class="white notSelect">
              React
            </div>
            <div class="white notSelect">
              Native
            </div>
            <div class="white notSelect">
              SEO
            </div>
            <div class="white notSelect">
              UI
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//timeout qui permet de remettre un filtre dans son état initial si le relachement de la souris
//par l'utilisateur n'a pas été effectuer (sur le filtre en question)
let ScaleTimeout = null;

export default {
  name: "FilterBar",
  methods: {
    deleteFilter(e) {
      //suppression du filtre
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    },
    selectFilter(e) {
      //fonction permettane de sélectionner/déselectionner un filtre
      if (e.target.classList.contains("notSelect")) {
        e.target.querySelector(".svgDelete").style.visibility = "visible";
        e.target.classList.remove("notSelect");
      } else {
        e.target.querySelector(".svgDelete").style.visibility = "hidden";
        e.target.classList.add("notSelect");
      }
      e.target.style.transform = "";
      if (ScaleTimeout != null) {
        //obligé de faire la vérif sinon le compiler détecte que ScaleTimeout n'est pas utilisé
        //car je lui effectue seulement des changements de valeurs
        ScaleTimeout = null;
      }
    },
    scaleFilter(e) {
      e.target.style.transform = "scale(0.9)";
      ScaleTimeout = setTimeout(function() {
        e.target.style.transform = "";
      }, 2000);
    },
    onDrag(e) {
      console.log("drag");
      const items = document.getElementsByClassName("white");
      const filtres = document.getElementById("drag-content");
      filtres.style.cursor = "pointer";
      for (let i = 0; i < items.length; i++) {
        items[i].style.transform =
          "translateX(" + (e.screenX - e.clientX) + "px)";
      }
    },
    showContent() {
      const bulle = document.getElementsByClassName("bubble-add")[0];
      if (bulle.style.visibility == "visible") {
        this.hideFilters();
      } else {
        this.showFilters();
      }
    },
    showFilters() {
      const bulle = document.getElementsByClassName("bubble-add")[0];
      bulle.style.visibility = "visible";
    },
    hideFilters() {
      const bulle = document.getElementsByClassName("bubble-add")[0];
      bulle.style.visibility = "hidden";
    },
    addFilter() {
      const nom = document.getElementById("filter-value");
      //vérifier si le filtre saisie n'est pas vide (minimum 2 caractères sans compter les espaces)
      if (nom.value.replace(/ /g, "").length >= 2) {
        //création du div
        const div = document.createElement("div");
        div.classList.add("white");
        div.classList.add("notSelect");
        div.innerText = nom.value;
        nom.value = "";
        //ajout des eventListenner et du svg
        this.addSpan(div);
        div.addEventListener("mousedown", this.scaleFilter);
        div.addEventListener("mouseup", this.selectFilter);
        //ajout du div à la liste
        const filtres = document.getElementById("drag-content");
        filtres.appendChild(div);
      } else {
        //animation qui indique à l'utilisateur de remplir le champ texte
        nom.classList.add("shake");
        nom.focus();
        setTimeout(function() {
          nom.classList.remove("shake");
        }, 1000);
      }
    },
    useFilter(e) {
      if (e.target.classList.contains("white")) {
        //ajout des eventListenner et du svg
        e.target.addEventListener("mousedown", this.scaleFilter);
        e.target.addEventListener("mouseup", this.selectFilter);
        this.addSpan(e.target);
        //déplacement dans la barre des filtres
        document.getElementById("drag-content").appendChild(e.target);
      }
    },
    addSpan(elt) {
      //fonction qui ajoute le svg "close" à un nouveau filtre pour pouvoir le supprimer
      const span = document.createElement("span");
      span.classList.add("svgDelete");
      span.addEventListener("click", this.deleteFilter);
      span.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18"> <path stroke="#00A3FF" stroke-miterlimit="10" stroke-width="1.5" d="M15.75 9A6.752 6.752 0 009 2.25 6.752 6.752 0 002.25 9 6.752 6.752 0 009 15.75 6.752 6.752 0 0015.75 9z" /> <path stroke="#00A3FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.25 11.25l-4.5-4.5M6.75 11.25l4.5-4.5" /> </svg>';
      elt.appendChild(span);
    },
  },
};
</script>

<style lang="scss">
.filter-content {
  background-color: #f0f0f0;
  position: sticky;
  top: 130px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  z-index: 1;
  button {
    cursor: pointer;
    border: none;
  }
}

.filter-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 52px;
  white-space: nowrap;
  #back-filter {
    margin-right: 10px;
    background-color: #ebf8ff;
    align-items: center;
    padding: 6px 18px 6px 18px;
    border-radius: 5px;
  }
  .white {
    background-color: #ebf8ff;
    cursor: pointer;
    align-items: center;
    padding: 6px 18px 6px 18px;
    border-radius: 5px;
    user-select: none;
    position: relative;
    transition: transform 0.5s;
    &.notSelect:hover {
      background-color: #00a3ff;
      color: white;
    }
  }
  .svgDelete {
    visibility: hidden;
    position: absolute;
    top: -8px;
    right: -8px;
    height: 18px;
    svg {
      pointer-events: none;
    }
  }

  .filters {
    display: flex;
    flex-direction: row;
    width: 70%;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 50px;
    div {
      margin-right: 10px;
      color: #00a3ff;
    }
    &:before {
      content: "";
      background: linear-gradient(
        90deg,
        #f0f0f0 0%,
        rgba(240, 240, 240, 0.3) 100%
      );
      width: 25px;
      height: 100%;
      pointer-events: none;
      position: absolute;
      left: 0;
      z-index: 1;
    }

    &:after {
      content: "";
      background: linear-gradient(
        -90deg,
        #f0f0f0 0%,
        rgba(240, 240, 240, 0.3) 100%
      );
      width: 25px;
      height: 100%;
      pointer-events: none;
      position: absolute;
      right: 0;
      z-index: 1;
    }
  }

  #add-filter {
    margin-left: 10px;
    background-color: #18acff;
    color: #ffffff;
    border-radius: 7px;
    padding: 10px;
    width: 128px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    &:hover {
      box-shadow: 0 0 10px 0px #18acff;
    }
  }

  .bubble-add {
    visibility: hidden;
    width: 200px;
    position: absolute;
    background-color: #18acff;
    top: 50px;
    right: 0px;
    border-radius: 5px;
    box-shadow: -4px 5px 10px #18acff;
    padding: 5px;
    display: flex;
    flex-direction: column;
    .arrow {
      background-color: #18acff;
      position: absolute;
      width: 30px;
      height: 30px;
      transform: rotate(45deg);
      top: -2px;
      right: 20px;
      z-index: -1;
      border-radius: 3px;
    }
    .not-use {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      div {
        margin: 5px;
      }
    }
    .add {
      display: flex;
      input[type="text"] {
        border-radius: 5px;
        background-color: rgb(235, 248, 255);
        height: 30px;
        width: 75%;
        border: none;
        padding: 0 0 0 5px;
        margin: 5px;
      }
      input[type="submit"] {
        border-radius: 5px;
        background-color: #52d459;
        height: 30px;
        width: 25%;
        border: none;
        margin: 5px;
        color: white;
        &:hover {
          cursor: pointer;
          box-shadow: inset 0px -3px 0px green;
        }
      }
    }
  }
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  border: solid 1px red !important;
  color: red;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

@media only screen and (max-width: 600px) {
  #add-filter {
    width: auto !important;
    span {
      display: none;
    }
  }
}
</style>
