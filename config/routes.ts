const routes = [
  {
    exact: false,
    path: '/',
    component: '@/layouts/globalLayout',
    routes: [{ path: '/', component: '@/pages/index' }],
  },
];

export type Routes = typeof routes;

export default routes;
