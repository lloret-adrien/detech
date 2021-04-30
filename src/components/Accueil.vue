<template>
  <div id="disconnect-home">
    <div id="gradient">
      <div class="back">
        <div class="purple"></div>
      </div>
    </div>
    <div class="detech">
      <h1>Un tribunal de l’information en temps réel</h1>
      <p>
        DETECH est un réseau social dans lequel vous pouvez témoigner et
        débattre sur différents sujets liés à l'informatique avec une communauté
        diversifiée d’amateurs et d’experts, et même .. d’avocats pour vous
        guider dans vos projets !
      </p>
      <p>
        Accède dès maintenant à un large panel d'informations vérifié par des
        experts en rejoignant notre communauté !
      </p>
      <button id="join-community">
        Rejoindre la communauté
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="10"
          fill="none"
          viewBox="0 0 7 10"
        >
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M3.293 5L0 1.707 1.414.293 6.121 5 1.414 9.707 0 8.293 3.293 5z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div class="detechtive">
      <div class="detechtive-body">
        <div class="li-content">
          <span id="li">1. Detechtive</span>
          <p>
            En tant que detechtive vous pouvez participer aux débats, aux
            sondages, et même réaliser vos propres témoignages qui vous
            permettront de gagner de la popularité en partageant vos
            connaissances à la communauté.
          </p>
          <div class="more">
            <button id="join-community">
              Devenir Lawtech
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="10"
                fill="none"
                viewBox="0 0 7 10"
              >
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M3.293 5L0 1.707 1.414.293 6.121 5 1.414 9.707 0 8.293 3.293 5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="none"
              viewBox="0 0 60 60"
            >
              <path
                fill="#666CFC"
                d="M30 33.05a3.047 3.047 0 100-6.094 3.047 3.047 0 000 6.093zM40.547 33.05a3.047 3.047 0 100-6.094 3.047 3.047 0 000 6.093zM19.453 33.05a3.047 3.047 0 100-6.094 3.047 3.047 0 000 6.093z"
              />
              <path
                stroke="#666CFC"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M52.5 30C52.5 17.58 42.422 7.5 30 7.5S7.5 17.58 7.5 30c0 12.423 10.078 22.5 22.5 22.5S52.5 42.424 52.5 30z"
              />
            </svg>
          </div>
        </div>

        <img src="../assets/Illustration Detective.png" alt="shake hand" />
      </div>
    </div>
    <div class="lawtech">
      <div class="law-body">
        <img src="../assets/shaking-hands.png" alt="shake hand" />
        <div class="li-content">
          <span id="li">2. Lawtech</span>
          <p>
            Tu as des connaissances en droit ? plus particulièrement en
            informatique (protection des données, protection des creations
            informatiques, ..) ?
          </p>
          <p>
            Commence ton aventure en tant que Lawtech, augmente ta popularité et
            fait peut-être la connaissance de tes futurs associés !
          </p>
          <div class="more">
            <button id="join-community">
              Devenir Lawtech
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="10"
                fill="none"
                viewBox="0 0 7 10"
              >
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M3.293 5L0 1.707 1.414.293 6.121 5 1.414 9.707 0 8.293 3.293 5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="none"
              viewBox="0 0 60 60"
            >
              <path
                fill="#AAC6FC"
                d="M30 33.05a3.047 3.047 0 100-6.094 3.047 3.047 0 000 6.093zM40.547 33.05a3.047 3.047 0 100-6.094 3.047 3.047 0 000 6.093zM19.453 33.05a3.047 3.047 0 100-6.094 3.047 3.047 0 000 6.093z"
              />
              <path
                stroke="#AAC6FC"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M52.5 30C52.5 17.58 42.422 7.5 30 7.5S7.5 17.58 7.5 30c0 12.423 10.078 22.5 22.5 22.5S52.5 42.424 52.5 30z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";

export default {
  name: "Accueil",
  components: {
    Footer,
  },
};
</script>

<style lang="scss">
.detech {
  display: flex;
  flex-direction: column;
  height: 500px;
  h1 {
    color: #393939;
    font-size: 80px;
  }
  button {
    background: linear-gradient(#645fbc, #5d79c1);
  }
}

.lawtech {
  display: flex;
  .law-body {
    display: flex;
    flex-direction: row;
    transform: translateY(-50px);
    justify-content: space-between;
  }
  button {
    background-color: #aac6fc;
  }
}

#gradient {
  overflow: hidden;
  position: absolute;
  height: 500px;
  width: 100%;
  z-index: -1;
  .back {
    display: inline-block;
    height: 0;
    width: 0;
    border-top: 400px solid #5d7ac2;
    border-right: 1800px solid transparent;
  }
  .purple {
    position: absolute;
    width: 200px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(#9ca7ff, rgba(156, 167, 255, 0));
    bottom: 50%;
    left: 10%;
    filter: blur(30px);
  }
}

.detechtive {
  position: relative;
  background-color: rgba(37, 57, 108, 0.5);
  img {
    transform: translateY(-150px) translateX(-50px);
  }
  .detechtive-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  button {
    background-color: #666cfc;
  }
}

#disconnect-home {
  position: relative;
  .li-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: self-start;
    text-align: start;
    margin: 0 50px 0 50px;
  }
  #li {
    color: #393939;
    text-transform: uppercase;
    font-size: 50px;
  }
  .more {
    display: flex;
    flex-direction: row;
  }
  #join-community {
    padding: 15px;
    color: #ffffff;
    border: none;
    border-radius: 100px;
    width: 200px;
    svg {
      margin-left: 5px;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
