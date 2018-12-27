<template>
  <div class="usersContainer">
    <h3>Users: </h3>
    <div class="user" v-if="users.length > 0" v-for="user in users">
      <p>Name: {{user.name}}</p>
      <p>Age: {{user.age}}</p>
      <p>Gender: {{user.gender}}</p>
    </div>
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
    fetch("/api/users")
    .then((res) => {
      if (res.ok){
        return res.json();
      }
    })
    .then((json) => {
      this.users = json;
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
