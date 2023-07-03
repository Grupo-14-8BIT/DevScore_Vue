<template>
  <div class="background">
    <div class="carousel-container">
      <a :href="currentArticle.url" target="_blank">
        <img :src="currentArticle.media" alt="Carousel Image" class="carousel-image rounded-border" />
      </a>
    </div>
    <div class="image-grid">
      <div v-for="article in articles" :key="article.url" class="image-item">
        <a :href="article.url" target="_blank">
          <img :src="article.media" alt="Article Image" class="small-image rounded-border" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      articles: [],
      currentIndex: 0
    };
  },
  computed: {
    currentArticle() {
      return this.articles.length > 0 ? this.articles[this.currentIndex] : {};
    }
  },
  created() {
    this.fetchArticles();
    setInterval(this.nextImage, 5000);
  },
  methods: {
    async fetchArticles() {
      try {
        var options = {
          method: 'GET',
          url: 'https://api.newscatcherapi.com/v2/search',
          params: { q: `Bitcoin`, lang: 'en', sort_by: 'relevancy', page: '1' },
          headers: {  
            'x-api-key': 'U52rKSTXokWuwsF-oro-_XwwNVfgbD4vMWFooWBagsU'
          }
        };
        const response = await axios.request(options);
        this.articles = response.data.articles;
      } catch (error) {
        console.error(error);
      }
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.articles.length;
    }
  }
};
</script>

<style>
body {
  background: url('https://raw.githubusercontent.com/Grupo-14-8BIT/Img/dae17a2026741db998b0fcf6637a913ef84f849c/Background/layered-waves-haikei.svg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
}

.carousel-container {
  text-align: center;
  margin: 20px auto;
}

.carousel-image {
  max-width: 60%;
  height: auto;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
}

.image-item {
  flex: 1 0 200px;
  margin: 10px;
}

.small-image {
  max-width: 100%;
  height: auto;
}

.rounded-border {
  border-radius: 15px;
}

@media (max-width: 600px) {
  .image-item {
    flex: 1 0 100px;
  }
}
</style>