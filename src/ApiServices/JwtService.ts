const jwtKey = 'chtjwt'

export const setJwt = (token: string): void => {
  console.log('setJWt', token)
  localStorage.setItem(jwtKey, token);
}

export const getJwt = () => {
  const jwt =  localStorage.getItem(jwtKey);
  console.log(jwt)
  return jwt
}
