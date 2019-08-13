const routes = [
  {
    path: "/home",
    component: "home",
    authorization: true
  },
  {
    path: "/person",
    component: "person"
  },
  {
    path: "/edt",
    component: "person/edt"
  },
  {
    // path: "/",
    component: "load" //若想没有404页面直接指向首页则将页面直接写home
  }
];
export default routes;
