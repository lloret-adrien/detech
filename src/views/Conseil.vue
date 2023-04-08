<template>
  <div class="container">
    <TopBar
      title="Conseils en Droit"
      subtitle="Les avis et les conseils des lawtech"
    ></TopBar>
    <FilterBar />
    <div class="grid_row">
      <Avis
        v-for="n in 10"
        :key="n"
        username="Jade Bugg"
        date="24h"
        subject="7 Skills of Highly Effective Programmers"
        resume="Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Hic ab sunt cumque in at doloremque 
        minus quidem reprehenderit quos, voluptatum optio rem 
        distinctio pariatur sequi soluta odio impedit quisquam autem."
        tag="#feature-request"
        :numberOfLikes="n"
      />
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue"
import FilterBar from "@/components/FilterBar.vue"
import Avis from "@/components/Avis.vue"

export default {
  components: {
    TopBar,
    Avis,
    FilterBar,
  },
}
</script>
