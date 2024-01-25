import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Signup from "@/views/auth/Signup.vue";
import CreatePlaylist from "../views/playlists/CreatePlaylist.vue";
import PlaylistDetails from "../views/playlists/PlaylistDetails.vue";
import { projectAuth } from "@/firebase/config";

const requrieAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "Login" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: requrieAuth,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/playlists/create",
    name: "CreatePlaylist",
    component: CreatePlaylist,
    beforeEnter: requrieAuth,
  },
  {
    path: "/playlists/:id",
    name: "PlaylistDetails",
    component: PlaylistDetails,
    beforeEnter: requrieAuth,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
