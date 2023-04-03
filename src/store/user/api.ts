import axios from 'axios'

const API_LOCAL_URL =
  'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/'

export async function getRequest(path: string) {
  return await axios.get(API_LOCAL_URL + path)
}
