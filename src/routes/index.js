import { createRouter, createWebHistory } from "vue-router"
import Home from "./Home"
import SearchResults from "./SearchResults"
import Detail from "./Detail"
import Plot from "./Plot"
import NotFound from "./NotFound"

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      name: "SearchResults",
      path: "/searchresults-:keyword",
      component: SearchResults,
    },
    {
      name: "Detail",
      path: "/detail-:id",
      component: Detail,
      children: [
        {
          name: "Plot",
          path: "plot",
          component: Plot,
          props: true,
        },
      ],
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
})
