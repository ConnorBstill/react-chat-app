export interface Response { 
  data: any, 
  error: boolean
}

export interface Message {
  body: string;
  from_user: string;
  date_time: string;
}

export interface User {
  username: string;
  password?: string;
}
