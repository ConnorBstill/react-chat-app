export const get = async (url: string, headers?: HeadersInit) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { ...headers }
    });

    return res.json();
  } catch (err) {

  }
}

export const post = async (url: string, body?: any, headers?: HeadersInit) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { ...headers },
      body: JSON.stringify(body)
    });

    return res.json();
  } catch (err) {
    
  }
}

export const put = async (url: string, headers?: HeadersInit) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { ...headers }
    });

    return res.json();
  } catch (err) {
    
  }
}

export const remove = async (url: string, headers?: HeadersInit) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { ...headers }
    });

    return res.json();
  } catch (err) {
    
  }
}