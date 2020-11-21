import { axiosRequest } from '@fuelrats/web-util/actions'

import frApi from '~/services/fuelrats'
import stApi from '~/services/stripe'
import wpApi from '~/services/wordpress'

import { updatesResources } from '../reducers/frAPIResources'


const debugstuff = {
  request: async (config) => {
    const res = await frApi.request(config)
    if (config.url === '/oauth2/authorize') {
      console.log('| response:', JSON.stringify(res))
    }
    return res
  },
}


export const frApiRequest = axiosRequest(frApi, updatesResources('fuelrats'))

export const frApiPlainRequest = axiosRequest(debugstuff)

export const stApiRequest = axiosRequest(stApi)
export const wpApiRequest = axiosRequest(wpApi)
