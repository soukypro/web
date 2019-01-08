<template>

            <div class="latest-posts media-grid" data-layout="fitRows">

            <article  v-for="post in getPosts" :key="post.id"  class="hentry media-cell">

              <div v-if="post.status == 'publish'" class="media-box">
                <img :src= "post.better_featured_image.source_url" alt="post-image">
                <div class="mask"></div>
                <a href="blog-single.html"></a>
              </div>

              <header class="media-cell-desc">
                <span title="2013" class="date"><span class="day">{{post.date | formatDay}}</span>{{post.date | formatMonth}}</span>
                <h3><a href="blog-single.html">{{post.title.rendered}}</a></h3>
              </header>
            </article>
          </div>
             


</template>

<script>
import moment from 'moment';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed : {
    getPosts(){
       return this.$store.getters.getPosts;
    }
  },
 
  filters :{
      formatDay(value){
        if (value) {
          return moment(String(value)).format('DD')
         }
      },
      formatMonth(value){
        if (value) {
          return moment(String(value)).format('MMM')
         }
      }
    },
  beforeMount(){
    this.$store.dispatch('fetchPosts');
  }
}
</script>

<style>

</style>
