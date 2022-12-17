import { API_URL } from '../environment/environment.dev';
import { get } from './HttpService'

import { Response } from '../types/serverDataInterfaces'

export const fetchLastMessages = async (): Promise<Response> => {
  try {
    return get(`${API_URL}/last-messages`);
  } catch (err: any) {
    return { data: [], error: err }
  }
}

export const fetchConversationHistory = async (interlocutorId: number): Promise<Response> => {
  return get(`${API_URL}/user-message-history/?interlocutorId=${interlocutorId}`);
}
