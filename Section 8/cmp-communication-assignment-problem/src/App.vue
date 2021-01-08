<template>
  <section>
    <header>
      <h1>Users</h1>
    </header>
    <ul>
        <user-data @add-user="addUser" />
      <active-user 
        v-for="user in users" 
        :key="user.name"
        :name="user.name"
        :age="user.age" />
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // dummy data
      users: [
        {
          name: "Meredith",
          age: 25,
        },
      ],
    };
  },
  methods: {
      addUser(name, age) {
          const newUserData = {
              name:name,
              age:age
          }
          this.users.push(newUserData);
      }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #f5df4d;
  color: #363945;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #939597;
  color: #363945;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #b55a30;
  background-color: #b55a30;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #fdac53;
  border-color: #fdac53;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
