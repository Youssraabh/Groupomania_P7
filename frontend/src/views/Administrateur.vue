<template>
  <div>
    <NavApp />
    <div class="container">
      <div class="card">
        <h1 class="card-title">Administration du site</h1>
        <p class="card-description">
          Vous avez la possiblité de supprimer les utilisateurs et les
          publications pour non-respect du règlement de la communauté
        </p>
        <div class="card-btn">
          <h2 class="card-title-profiles">Les comptes personnels</h2>
          <div>
            <div
              class=" card-profilesList"
              :key="user.id"
              v-for="user in users"
            >
              <ProfilesList
                v-bind="user"
                @deleteProfileUser="getDeleteUser()"
              />
            </div>
          </div>  
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import NavApp from "../components/NavApp.vue";
import ProfilesList from "../components/ProfilesList.vue";

export default {
  name: "Administrateur",
  components: {
    NavApp,
    ProfilesList,
  },
  data() {
    return {
      token: localStorage.getItem("token"),
      users: [],
      user: {},
      posts: [],
      post: {},
    };
  },
  async created() {
    await axios
      .get("http://localhost:3000/api/users", {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
      .then((response) => {
        this.users = response.data.users;
        console.log(this.users);
      })
      .catch(function(error) {
        alert(error);
        console.log(error);
      });

    await axios
      .get("http://localhost:3000/api/posts", {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
      .then((response) => {
        this.posts = response.data.posts;
        console.log(this.posts);
      })
      .catch(function(error) {
        alert(error);
        console.log(error);
      });
  },

  methods: {
    async getDeleteUser() {
      await axios
        .get("http://localhost:3000/api/users", {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          this.users = response.data.users;
          console.log(this.users);
        })
        .catch(function(error) {
          alert(error);
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  margin-top: 3rem;
}
.card-title {
  margin: 1.2rem;
  font-size: 2rem;
  background-color: #0d6efd;
  color: black;
  text-align: center;
}
.card-btn {
  display: flex;
  flex-direction: column;
}
.card-description {
  text-align: center;
  font-weight: 600;
  font-size: 1.3em
}

.card-profilesList,
.card-postsList {
  margin: 1rem auto;
}
.card-title-profiles {
  margin-left: -920px;
  margin-top: 1rem;
  text-decoration: underline;
}
.card-profilesList,
.card-postsList {
  display: flex;
  flex-direction: column;
}
.card-text {
  margin: 1rem;
}
.card-title2 {
  margin: 1rem;
  font-weight: 600;
  color: blue;
}
#btn-card {
  width: 50%;
  margin: 1rem auto;
}
</style>
