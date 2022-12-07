export const get = async (url: string, headers?: HeadersInit) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { ...headers },
      credentials: 'include',
    });

    return res.json();
  } catch (err) {

  }
}

export const post = async (url: string, body?: any, headers?: HeadersInit): Promise<any> => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        // 'credentials' : 'include',
        ...headers 
      },
      // credentials: 'include',
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