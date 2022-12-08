const jwtProp = 'chtjwt'

export const setJwt = (token: string): void => {
  console.log('setJWt', token)
  localStorage.setItem(jwtProp, token);
}

export const getJwt = () => {
  const jwt =  localStorage.getItem(jwtProp);
  console.log(jwt)
  return jwt
}
