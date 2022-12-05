import { API_URL } from '../environment/environment.dev';
import { get, post } from './HttpService';

import { Response, User } from './apiInterfaces'

export const registerUser = async (user: User): Promise<Response> => {
  try {
    const res = await post(`${API_URL}/register`, user);
    return res.json();
  } catch (err: any) {
    return { data: [], error: err }
  }
}

export const authenticateUser =  async (user: User): Promise<Response> => {
  try {
    const res = await post(`${API_URL}/authenticate`, user);
    return res.json();
  } catch (err: any) {
    return { data: [], error: err }
  }
}
