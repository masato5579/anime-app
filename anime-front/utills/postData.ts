import { apiClient } from './axios'

export async function postData(
  apiPass: any,
  formData: any,
  setSubmitting: any,
  router: any,
  route: any,
) {
  return apiClient.post(apiPass, formData).then((res) => {
    if (res.status === 200) {
      router.push(route)
    }
    setSubmitting(false)
  })
}
