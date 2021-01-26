import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Students from "../views/Students.vue";
import SearchStudents from "../views/SearchStudents.vue";
import Backoffice from "../views/Backoffice/Backoffice.vue";
import BackofficeUsers from "../views/Backoffice/BackofficeUsers.vue";
import BackofficeAtividades from "../views/Backoffice/BackofficeAtividades.vue";
import BackofficeUcs from "../views/Backoffice/BackofficeUcs.vue";
import BackofficeNotas from "../views/Backoffice/BackofficeNotas.vue";
import BackofficeFormula from "../views/Backoffice/BackofficeFormula.vue";
import Atividades from "../views/Atividades.vue";
import Atividade from "../views/Atividade.vue";
import Store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/searchStudents",
    name: "searchStudents",
    component: SearchStudents,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/students/:id",
    name: "students",
    component: Students,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/activities/:id",
    name: "atividade",
    component: Atividade,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/activities",
    name: "atividades",
    component: Atividades,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/backoffice",
    component: Backoffice,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "users",
        name: "backofficeUsers",
        component: BackofficeUsers,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "atividades",
        name: "backofficeAtividades",
        component: BackofficeAtividades,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "ucs",
        name: "backofficeUcs",
        component: BackofficeUcs,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "notas",
        name: "backofficeNotas",
        component: BackofficeNotas,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "formula",
        name: "backofficeFormula",
        component: BackofficeFormula,
        meta: {
          requiresAuth: true
        },
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (Store.getters.getLoggedUserId == 0) {
      next({ name: "login" })
    } else{
      if (Store.getters.getUserTypeById(Store.getters.getLoggedUserId) == "admin" || Store.getters.getUserTypeById(Store.getters.getLoggedUserId) == "teacher") {
        next()
      }else{
        next()
      }
    }
  }else{
    next()
  }
});

export default router;
