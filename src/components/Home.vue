<template lang='html'>
  <div id='home'>
    <h1>Home</h1>
    {{latestCats}}
    <md-card v-for='cat in cats' :key='cat['.key']'>
      <md-card-media>
        <img src='cat.url' :alt='cat.comment'>
      </md-card-media>

      <md-card-header>
        <div class='md-title'>{{ cat.comment }}</div>
      </md-card-header>

      <md-card-actions>
        <router-link to=''/detail/'+cat['.key']'>
          <md-button>Details</md-button>
        </router-link>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cats: []
    }
  },
  firebase () {
    return {
      cats: this.$db.ref('cats').on('value', (snapshot) => {
        this.cats.push({...snapshot.val()})
      })
    }
  },
  computed: {
    latestCats () {
      console.log(this.cats.length)
      this.cats.reserve()
    }
  }
}
</script>

<style lang='css'>
.md-card {
  margin-bottom: 16px
}
</style>
