<template>
  <div class="case">
    <div class="pic">
      <img v-if="image != ''" :src="image" alt="image of post" />
      <!-- faire une méthode pour récupérer l'image du thème par défault -->
      <img
        v-else
        src="https://wallpapercave.com/wp/wp6784380.jpg"
        alt="image of post"
      />
    </div>
    <div class="content">
      <div class="info">
        <span>{{ theme }}</span>
        <span>{{ date }}</span>
      </div>
      <div class="resume">
        <h1>{{ subject }}</h1>
        <p>{{ resume }}</p>
      </div>
      <div class="actions">
        <div class="user">
          <v-avatar rounded :size="32" :username="username" />
          <!-- src="https://media-exp1.licdn.com/dms/image/C4D03AQE7Pg6o7wWSag/profile-displayphoto-shrink_200_200/0/1611838794408?e=1619654400&v=beta&t=5CG-FBKxvVobd8cTSzN7PxPR3_zZhE3Mc_RN_alF3AU" -->
          <p>{{ username }}</p>
        </div>
        <span>Read more 🡢</span>
      </div>
    </div>
  </div>
</template>

<script>
import { vAvatar } from "@amaury-tobias/v-avatar";

export default {
  name: "Card",
  components: {
    vAvatar,
  },
  props: {
    theme: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    subject: {
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
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.case {
  width: 318px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  .pic {
    display: flex;
    height: 165px;
    width: 100%;
    img {
      border-radius: 15px 15px 0 0;
      width: 100%;
    }
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 15px;
    justify-content: space-between;
    .info {
      display: flex;
      flex-direction: row;
      color: #6e798c;
      justify-content: space-between;
      font-size: 15px;
    }
    .resume {
      display: flex;
      flex-direction: column;
      text-align: start;
      h1 {
        font-size: 26px;
        margin-bottom: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        display: -webkit-box;
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
    }
    .actions {
      color: #007ae9;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;
      .user {
        display: flex;
        flex-direction: row;
        align-items: center;
        p {
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
