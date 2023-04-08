<template>
  <div>
    <div class="debat" v-for="item in debats" :key="item.id">
      <div class="quest">
        <div class="user">
          <v-avatar rounded :size="42" :username="item.username" />
          <div class="who">
            <h1>{{ item.username }}</h1>
            <p>{{ item.date }}</p>
          </div>
        </div>
        <div class="debat_content">
          <h1>{{ item.question }}</h1>
          <p>{{ item.resume }}</p>
        </div>
        <svg
          v-if="item.open"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          fill="none"
          viewBox="0 0 200 200"
        >
          <path
            fill="#0EB415"
            d="M76.101 193.754a7.167 7.167 0 01-5.496-2.557 7.175 7.175 0 01-1.574-5.854v-.043l10.98-60.296H37.5a6.254 6.254 0 01-5.64-3.558 6.25 6.25 0 01.78-6.622L118.253 8.988a7.211 7.211 0 018.441-2.19 7.21 7.21 0 014.372 7.546c0 .117-.031.23-.051.347l-11.019 60.313h42.503a6.25 6.25 0 014.86 10.18L81.734 191.018a7.204 7.204 0 01-5.633 2.735z"
            opacity=".25"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          fill="none"
          viewBox="0 0 200 200"
        >
          <g opacity=".25">
            <path
              fill="#D71515"
              d="M168.75 174.998a6.225 6.225 0 01-4.418-1.832l-137.5-137.5a6.25 6.25 0 018.836-8.836l137.5 137.5a6.252 6.252 0 01-.948 9.614 6.25 6.25 0 01-3.47 1.054zM168.555 79.683a6.247 6.247 0 00-6.054-4.688h-42.504l11.019-60.3a7.208 7.208 0 00-8.907-8.234 7.208 7.208 0 00-3.854 2.518L82.091 53.69a1.563 1.563 0 00.113 2.09l58.984 58.985a1.574 1.574 0 001.187.456 1.56 1.56 0 001.134-.578l23.75-29.359a6.397 6.397 0 001.296-5.602zM117.801 144.218L58.817 85.234a1.563 1.563 0 00-2.316.121l-23.766 29.352a6.393 6.393 0 00-1.289 5.609 6.253 6.253 0 006.055 4.688h42.511L69.04 185.3v.043a7.175 7.175 0 0012.695 5.676l36.176-44.711a1.566 1.566 0 00-.11-2.09z"
            />
          </g>
        </svg>
      </div>
      <div class="results">
        <vue-poll v-bind="item.options" @addvote="addVote" />
      </div>
    </div>
  </div>
</template>

<script>
import { vAvatar } from "@amaury-tobias/v-avatar"
import VuePoll from "vue-poll"

export default {
  name: "Debat",
  components: {
    vAvatar,
    VuePoll,
  },
  data() {
    return {
      debats: [
        {
          id: 1,
          username: "Philippe Katrine",
          question: "Quel framework front-end utilisé en 2021 ?",
          resume:
            "Les single-page application ou SPA (applications web qui se construisent côté navigateur, en appelant la logique métier au moyen d’API) sont majoritaires parmi les nouvelles applications web créées. Il en résulte un essor des frameworks front-end dont on n’a pas fini de voir le développement. Examinons un à un les 3 frameworks les plus utilisés. Aujourd’hui, les 3 frameworks front-end les plus populaires sont : React, Angular (à ne pas confondre à AngularJS son prédécesseur) et Vue.js.",
          date: "Il y a 2 jours", //en faire une méthode qui retournera cette chaine en fonction de la donnée en bd
          open: true,
          options: {
            question: "",
            answers: [
              { value: 1, text: "Vue", votes: 53 },
              { value: 2, text: "React", votes: 35 },
              { value: 3, text: "Angular", votes: 30 },
              { value: 4, text: "Other", votes: 10 },
            ],
            finalResults: false,
          },
        },
        {
          id: 2,
          username: "Alkapote",
          question: "Quel framework back-end utilisé en 2021 ?",
          resume:
            "Les frameworks backend sont aujourd’hui la quintessence du développement d’applications pour d’innombrables entreprises à travers le monde. Trouver le bon framework backend peut être assez crucial pour les développeurs afin de garantir des performances et une évolutivité optimale. Compte tenu du grand nombre d’options disponibles aujourd’hui, choisir celles qui sont pertinentes peut être un vrai casse-tête.",
          date: "Il y a 5 jours", //en faire une méthode qui retournera cette chaine en fonction de la donnée en bd
          open: false,
          options: {
            question: "",
            answers: [
              { value: 1, text: "Symfony", votes: 53 },
              { value: 2, text: "Laravel", votes: 35 },
              { value: 3, text: "CakePHP", votes: 3 },
              { value: 4, text: "Other", votes: 27 },
            ],
            finalResults: true,
          },
        },
      ],
    };
  },
  /*props: {
    date: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    open: {
      type: Boolean,
      required: true,
    },
  },*/
  methods: {
    addVote(obj) {
      console.log("You voted " + obj.value + "!");
    },
  },
}
</script>

<style lang="scss">
.debat {
  text-align: start;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 15px;
  height: 200px;
  > div {
    background-color: white;
    border-radius: 10px;
  }
  h1 {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
  }
  .quest {
    width: 75%;
    max-width: 750px;
    margin-right: 45px;
    position: relative;
    padding: 20px;
    svg {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
    }
  }
  .debat_content {
    margin-left: 50px;
    margin-top: 5px;
    h1 {
      margin-bottom: 5px;
    }
  }
  p {
    font-size: 17px;
    color: #6e798c;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display: -webkit-box;
  }
  .results {
    width: 25%;
    max-width: 250px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .bg {
    background-color: #d8c6f8 !important;
    &.selected {
      background-color: #885adc !important;
    }
  }
  .ans-voted,
  .ans-voted.final {
    background-color: aliceblue;
    border-radius: 5px;
  }

  .vue-poll .votes {
    transform: translateY(-10px);
  }

  .ans,
  .ans-voted {
    max-height: 31px;
    overflow: hidden;
  }

  .ans-no-vote:hover {
    border: 2px solid #778ff7 !important;
    .txt {
      color: #778ff7 !important;
    }
  }
}
</style>
