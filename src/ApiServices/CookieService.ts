export const setJwtCookie = (token: string): void => {
  document.cookie = `user_jwt=${token}; Secure`;
}
