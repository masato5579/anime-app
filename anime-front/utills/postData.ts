import { apiClient, apiClientForfile } from './axios'

export async function postData(
  apiPass: any,
  formData: any,
  router: any,
  route: any,
  setErrors: any,
  nextPage: any,
  isFile: any,
) {
  const api = isFile ? apiClientForfile : apiClient

  return await api
    .post(apiPass, formData)
    .then((res) => {
      if (res.status === 200) {
        router.push(
          {
            pathname: route,
            query: {
              ...res.data,
              ...formData,
            },
          },
          nextPage,
        )
      }
    })
    .catch((e) => {
      setErrors(e.response.data.errors)
      console.error(e)
    })
}
