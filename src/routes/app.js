import AsyncLoad from '../components/AsyncLoad'

export const AsyncHome = AsyncLoad({
  loader: () => import('../components/Home.js')
})
export const AsyncDash = AsyncLoad({
  loader: () => import('../components/Login.js')
})
