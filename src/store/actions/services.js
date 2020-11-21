import { isRequired } from '@fuelrats/validation-util'
import { HttpStatus } from '@fuelrats/web-util/http'

import frApi from '~/services/fuelrats'
import stApi from '~/services/stripe'
import wpApi from '~/services/wordpress'

import { updatesResources } from '../reducers/frAPIResources'

const mergeMeta = (meta) => {
  return meta.reduce((acc, metaData) => {
    if (metaData && typeof metaData === 'object') {
      return {
        ...acc,
        ...metaData,
      }
    }
    return acc
  }, {})
}

function createAxiosFSA (type, response, ...meta) {
  const {
    config,
    data,
    headers,
    request,
    status,
    statusText,
  } = response

  let requestBody = config.data

  if (config.headers['Content-Type'] === 'application/json') {
    requestBody = JSON.parse(requestBody)
  }

  return {
    type,
    payload: data,
    error: HttpStatus.isError(status), // action is error if status code is error code.
    meta: {
      ...mergeMeta(meta),
      request: {
        ...config,
        data: requestBody,
      },
      response: {
        data: request.response,
        headers,
        status,
        statusText,
      },
    },
  }
}

function axiosRequest (service, ...commonMeta) {
  return (type = isRequired('type'), config, ...meta) => {
    return async (dispatch) => {
      const response = await service.request(config)

      return dispatch(
        createAxiosFSA(
          type,
          response,
          ...commonMeta,
          ...meta,
        ),
      )
    }
  }
}


export const frApiRequest = axiosRequest(frApi, updatesResources('fuelrats'))

export const frApiPlainRequest = axiosRequest(frApi)

export const stApiRequest = axiosRequest(stApi)
export const wpApiRequest = axiosRequest(wpApi)
