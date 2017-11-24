import AsyncLoad from '../components/AsyncLoad'

export const AsyncLogin = AsyncLoad({
  loader: () => import('../components/pages/LoginPage.js'),
})
export const AsyncHome = AsyncLoad({
  loader: () => import('../components/pages/HomePage.js'),
})

export const AsyncUpload = AsyncLoad({
  loader: () => import('../components/forms/Upload.js'),
})
export const AsyncAddRestaurant = AsyncLoad({
  loader: () => import('../components/forms/AddRestaurant.js'),
})

export const AsyncShop = AsyncLoad({
  loader: () => import('../routes/shop/index.js'),
})
