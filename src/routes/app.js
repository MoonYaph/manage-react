import AsyncLoad from '../components/AsyncLoad'


export const AsyncLogin = AsyncLoad({
  loader: () => import('../components/pages/LoginPage.js')
})
export const AsyncHome = AsyncLoad({
  loader: () => import('../components/pages/HomePage.js')
})
