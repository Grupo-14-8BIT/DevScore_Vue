<template>
    <div class="background">
    <div class="home">
        <div class="feed">
          <h2>{{ currentArticle?.title }}</h2>
          <img :src="currentArticle?.urlToImage" alt="News Image" />
        </div>
      </div>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  interface Article {
    title: string;
    urlToImage: string;
  }
  
  export default defineComponent({
    data() {
      return {
        articles: [] as Article[],
        currentArticleIndex: 0,
        currentArticle: null as Article | null,
      };
    },
    methods: {
      async fetchTechNews() {
        try {
          const response = await fetch(
            'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=95a69af0627245dba7cd75b3a1eae829'
          );
          const data = await response.json();
          if (data.articles && data.articles.length > 0) {
            this.articles = data.articles;
            this.currentArticle = this.articles[this.currentArticleIndex];
            setInterval(this.changeArticle, 5000);
          } else {
            console.error('No tech news articles found.');
          }
        } catch (error) {
          console.error('Failed to fetch tech news:', error);
        }
      },
      changeArticle() {
        this.currentArticleIndex = (this.currentArticleIndex + 1) % this.articles.length;
        this.currentArticle = this.articles[this.currentArticleIndex];
      },
    },
    mounted() {
      this.fetchTechNews();
    },
  });
  </script>
  
  <style>
.home {
  height: 100vh;
  position: relative;
}

.background {
  background-color: #ffffff;
  /* background-image: url("file:///home/wander/Downloads/layered-peaks-haikei.svg"); */
  background-size: cover;
  background-position: center;
}
  .feed {
    padding: 10px;
  }
  </style>
  