function getAuthHeader(options: object) {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
    }
    return { ...options, authorization: `Bearer ${token}` };
  } catch (e) {
    return options;
  }
}

export async function fetcher(url: string, options = {}) {
  return fetch(url, getAuthHeader(options)).then(async (res) => {
    if (res.ok) {
      return res.json();
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
