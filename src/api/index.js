import axios from 'axios'

export default {
  signup: credentials => axios.post('/api/signup', { credentials }).then(res => res.data.user),
  login: credentials => axios.post('/api/login', { credentials }).then(res => res.data.user),
}
