<template>
  <div class="">

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data(){
    return {
      users: []
    }
  },
  computed: {

  },
  methods: {

  },
  mounted(){
    fetch("/api")
    .then((res) => {
      console.log(res);
      this.users = res;
    })
    .catch(err => err);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
