export default [
  {
    name: 'Dashboard',
    icon: 'laptop',
    route: '/dashboard',
  },
  {
    name: 'Users',
    icon: 'user',
    route: '/user',
  },
  {
    name: 'Post',
    icon: 'shopping-cart',
    route: '/post',
  },
  {
    name: 'Edit',
    icon: 'edit',
    children: [
      {
        name: 'Add Shop',
        route: '/addShop',
      },
      {
        name: 'Add Activity',
        route: '/addActivity',
      },
    ],
  },
]
