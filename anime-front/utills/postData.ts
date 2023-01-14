import { apiClient } from './axios'

export async function postData(
  apiPass: any,
  formData: any,
  router: any,
  route: any,
  setErrors: any,
) {
  return await apiClient
    .post(apiPass, formData)
    .then((res) => {
      if (res.status === 200) {
        router.push({ pathname: route, query: res.data })
      }
    })
    .catch((e) => {
      setErrors(e.response.data.errors)
      console.error(e)
    })
}
