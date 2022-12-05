import { API_URL } from '../environment/environment.dev';

import { Response } from './apiInterfaces'

export const fetchLastMessages = async (): Promise<Response> => {
  try {
    const res = await fetch(`${API_URL}/last-messages`);
    return res.json();
  } catch (err: any) {
    return { data: [], error: err }
  }
}
