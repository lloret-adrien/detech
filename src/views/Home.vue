<template>
  <div class="container">
    <TopBar
      title="Débats"
      subtitle="Partage ton avis avec la communauté"
    ></TopBar>
    <FilterBar />
    <Debat />
    <!--<Debat
      username="Philippe Katrine"
      date="Il y a 2 jours"
      question="Quel framework front-end utilisé en 2021 ?"
      resume="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi qui fugiat illo quidem ducimus, expedita labore voluptatum eveniet autem dignissimos facilis nisi, dolor cum corporis magnam praesentium minima possimus velit."
      :open="true"
    />
    <Debat
      username="Alkapote"
      date="Il y a 2 jours"
      question="Quel framework front-end utilisé en 2021 ?"
      resume="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi qui fugiat illo quidem ducimus, expedita labore voluptatum eveniet autem dignissimos facilis nisi, dolor cum corporis magnam praesentium minima possimus velit."
      :open="false"
    />-->
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import FilterBar from "@/components/FilterBar.vue";
import Debat from "@/components/Debat.vue";

export default {
  name: "Home",
  components: {
    TopBar,
    FilterBar,
    Debat,
  },
};
</script>
