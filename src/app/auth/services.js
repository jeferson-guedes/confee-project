import http from '@/http'

export const postLogin = (email, password) => {
  return http.get('http://uinames.com/api/?ext')
    .then(response => response.data)
}
