export interface Response { 
  data: any, 
  error: boolean
}

export interface Message {
  body: string;
  from_user_id: number;
  from_user_name: string;
  date_time: string;
}

export interface User {
  username: string;
  password?: string;
}
