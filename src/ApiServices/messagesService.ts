import { API_URL } from '../environment/environment.dev';

import { Response, Message } from './ApiInterfaces'

export const fetchLastMessages = async (): Promise<Response> => {
  const res = await fetch(`${API_URL}/last-messages`);
  return res.json();
}
