import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Students from "../views/Students.vue";
import SearchStudents from "../views/SearchStudents.vue";
import Backoffice from "../views/Backoffice/Backoffice.vue";
import BackofficeUsers from "../views/Backoffice/BackofficeUsers.vue";
import BackofficeAtividades from "../views/Backoffice/BackofficeAtividades.vue";
import BackofficeUcs from "../views/Backoffice/BackofficeUcs.vue";
import BackofficeFormula from "../views/Backoffice/BackofficeFormula.vue";
import Rankings from "../views/Rankings.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/searchStudents",
    name: "searchStudents",
    component: SearchStudents
  },
  {
    path: "/students/:id",
    name: "students",
    component: Students
  },
  {
    path: "/rankings",
    name: "rankings",
    component: Rankings
  },
  {
    path: "/backoffice",
    component: Backoffice,
    children: [
      {
        path: "users",
        name: "backofficeUsers",
        component: BackofficeUsers
      },
      {
        path: "atividades",
        name: "backofficeAtividades",
        component: BackofficeAtividades
      },
      {
        path: "ucs",
        name: "backofficeUcs",
        component: BackofficeUcs
      },
      {
        path: "formula",
        name: "backofficeFormula",
        component: BackofficeFormula
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
