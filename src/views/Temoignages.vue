<template>
  <div class="container">
    <TopBar
      title="Témoignages"
      subtitle="Des cours proposer par des experts"
    ></TopBar>
    <FilterBar />
    <!-- <ckeditor
      v-model="editorData"
      :config="editorConfig"
      tag-name="textarea"
    ></ckeditor> -->
    <div class="grid_row">
      <Card
        v-for="item in temoignages"
        :key="item.id"
        :subject="item.subject"
        :resume="item.resume"
        :username="item.username"
        :theme="item.theme"
        :date="item.date"
        :image="item.image.source"
      />
    </div>
  </div>
</template>

<script>
// import CKEditor from "ckeditor4-vue";
import TopBar from "@/components/TopBar.vue";
import Card from "@/components/Card.vue";
import FilterBar from "@/components/FilterBar.vue";

export default {
  components: {
    // ckeditor: CKEditor.component,
    TopBar,
    Card,
    FilterBar,
  },
  data() {
    return {
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
      temoignages: [
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
        {
          id: 2,
          username: "Adrien Lloret",
          image: {
            source: "/media.png",
          },
          subject: "7 Skills of Highly Effective Programmers",
          resume:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aperiam facilis laborum nihil consequatur ab maxime praesentium possimus nostrum, dicta deleniti id explicabo debitis, officia iure velit hic. Eum, est?",
          theme: "FRONT END",
          date: "17 day ago",
        },
        {
          id: 3,
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
        {
          id: 4,
          username: "Adrien Lloret",
          image: {
            source: "/businnes.png",
          },
          subject: "7 Skills of Highly Effective Programmers",
          resume:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aperiam facilis laborum nihil consequatur ab maxime praesentium possimus nostrum, dicta deleniti id explicabo debitis, officia iure velit hic. Eum, est?",
          theme: "FRONT END",
          date: "17 day ago",
        },
        {
          id: 5,
          username: "Adrien Lloret",
          image: {
            source: "",
          },
          subject: "7 Skills of Highly Effective Programmers",
          resume:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aperiam facilis laborum nihil consequatur ab maxime praesentium possimus nostrum, dicta deleniti id explicabo debitis, officia iure velit hic. Eum, est?",
          theme: "FRONT END",
          date: "17 day ago",
        },
        {
          id: 6,
          username: "Adrien Lloret",
          image: {
            source: "/businnes.png",
          },
          subject: "7 Skills of Highly Effective Programmers",
          resume:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aperiam facilis laborum nihil consequatur ab maxime praesentium possimus nostrum, dicta deleniti id explicabo debitis, officia iure velit hic. Eum, est?",
          theme: "FRONT END",
          date: "17 day ago",
        },
        {
          id: 7,
          username: "Adrien Lloret",
          image: {
            source: "/media.png",
          },
          subject: "7 Skills of Highly Effective Programmers",
          resume:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aperiam facilis laborum nihil consequatur ab maxime praesentium possimus nostrum, dicta deleniti id explicabo debitis, officia iure velit hic. Eum, est?",
          theme: "FRONT END",
          date: "17 day ago",
        },
        {
          id: 8,
          username: "Adrien Lloret",
          image: {
            source: "",
          },
          subject: "7 Skills of Highly Effective Programmers",
          resume:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aperiam facilis laborum nihil consequatur ab maxime praesentium possimus nostrum, dicta deleniti id explicabo debitis, officia iure velit hic. Eum, est?",
          theme: "FRONT END",
          date: "17 day ago",
        },
      ],
    };
  },
};
</script>
