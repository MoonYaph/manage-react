import AsyncLoad from '../components/AsyncLoad'

export const AsyncHome = AsyncLoad({
  loader: () => import('../components/Home.js')
})
export const AsyncLogin = AsyncLoad({
  loader: () => import('../components/pages/LoginPage.js')
})
