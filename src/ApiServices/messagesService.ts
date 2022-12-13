import { API_URL } from '../environment/environment.dev';
import { get } from './HttpService'

import { Response } from '../types/serverDataInterfaces'

export const fetchLastMessages = async (): Promise<Response> => {
  try {
    console.log('fetchLastMessages!!!!1');
    return get(`${API_URL}/last-messages`);
    // return res.json();
  } catch (err: any) {
    return { data: [], error: err }
  }
}
