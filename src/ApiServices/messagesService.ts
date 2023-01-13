import { API_URL } from '../environment/environment.dev';
import { get, post } from './HttpService'

import { Response } from '../types/serverDataInterfaces';
import { SentMessage } from '../types/clientDataInterfaces';

export const fetchLastMessages = async (): Promise<Response> => {
  return get(`${API_URL}/last-messages`);
}

export const fetchConversationHistory = async (interlocutorId: number): Promise<Response> => {
  return get(`${API_URL}/user-message-history/${interlocutorId}`);
}

export const sendMessage = async (newMessage: SentMessage): Promise<Response> => {
  return post(`${API_URL}/send-message`, newMessage);
}
