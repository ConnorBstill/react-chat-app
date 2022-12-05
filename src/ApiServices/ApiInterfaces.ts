export interface Response { 
  data: Message[], 
  error: boolean
}

export interface Message {
  body: string;
  from: string;
  date: string;
}

export interface User {
  username: string;
  password?: string;
}
