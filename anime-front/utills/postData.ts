import { NextRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'

import { Errors } from '../types/Errors'

import { apiClient, apiClientForfile } from './axios'

/**
 *
 * @param {boolean} isFileSendOn
 * @param {string} apiPass
 * @param {object} formData
 * @param {NextRouter} router
 * @param {string} nextPassName
 * @param {Dispatch<SetStateAction<Errors>>}setErrors
 * @param {string} nextPage
 * @returns
 */
export async function postData(
  isFileSendOn: boolean,
  apiPass: string,
  formData: object,
  router: NextRouter,
  nextPassName: string,
  setErrors: Dispatch<SetStateAction<Errors>>,
  nextPage: string = nextPassName,
) {
  const api = isFileSendOn ? apiClientForfile : apiClient

  return await api
    .post(apiPass, formData)
    .then((res) => {
      if (res.status === 200) {
        router.push(
          {
            pathname: nextPassName,
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
