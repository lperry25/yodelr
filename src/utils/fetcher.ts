function getAuthHeader(options: object) {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return options;
    }
    return {
      ...options,
      // @ts-ignore
      headers: { ...options.headers, authorization: `Bearer ${token}` },
    };
  } catch (e) {
    return options;
  }
}

export async function fetcher(url: string, options = {}) {
  return fetch(url, getAuthHeader(options)).then(async (res) => {
    if (res.ok) {
      return res.json();
    }
    if (res.status === 401) {
      // unauthorized calls should result in removing the token
      localStorage.removeItem("token");
    }
    let message;
    try {
      message = await res.json();
    } catch (e) {
      // in case the api does not return the exepcted json error message return the status text
      throw { message: res.statusText };
    }
    throw message || { message: res.statusText };
  });
}
