<template>
  <div class="avis">
    <div class="user">
      <v-avatar rounded :size="42" :username="username" />
      <div class="who">
        <h1>{{ username }}</h1>
        <p>{{ date }}</p>
      </div>
      <!-- svg save -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="25"
        fill="none"
        viewBox="0 0 12 15"
      >
        <path
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10.736 13.789l-4.667-3.334-4.667 3.334V3.122a1.333 1.333 0 011.334-1.333h6.666a1.334 1.334 0 011.334 1.333v10.667z"
        />
      </svg>
    </div>
    <div class="avis_content">
      <h1><span>Avis sur : </span>{{ subject }}</h1>
      <p>{{ resume }}</p>
      <div>
        <div class="likes">
          <!-- svg like -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              stroke="#7C8894"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4.693 14.955h-2a1.334 1.334 0 01-1.334-1.333V8.955a1.333 1.333 0 011.334-1.333h2M9.359 6.29V3.622a2 2 0 00-2-2l-2.666 6v7.333h7.52a1.334 1.334 0 001.333-1.133l.92-6a1.333 1.333 0 00-1.333-1.533H9.359z"
            />
          </svg>
          <p>{{ numberOfLikes }}</p>
        </div>
        <div class="tag">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { vAvatar } from "@amaury-tobias/v-avatar"

export default {
  name: "Avis",
  components: {
    vAvatar,
  },
  props: {
    username: {
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
    numberOfLikes: {
      type: Number,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.avis {
  width: 500px;
  margin: 10px;
  background-color: #ffffff;
  text-align: start;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  svg {
    cursor: pointer;
    width: 22px;
    height: 22px;
  }
  p {
    color: #6e798c;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display: -webkit-box;
  }
  h1 {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
  }
  .avis_content {
    margin-left: 50px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    > div {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
    }
    span {
      color: grey;
      font-style: initial;
      font-size: 22px;
    }
    h1 {
      font-style: italic;
      font-size: 28px;
    }
  }

  .tag {
    background-color: #e1ecfe;
    border-radius: 100px;
    padding: 2px 8px 2px 8px;
    font-size: 15px;
  }
  .likes {
    display: flex;
    align-items: center;
    p {
      margin-left: 5px;
      font-weight: bold;
      font-size: 14px;
    }
    svg {
      transition: all 0.3s ease-in-out;
      &:hover {
        fill: #7c8894a3;
        transform: scale(1.2) rotate(-10deg);
      }
    }
  }
}
</style>
