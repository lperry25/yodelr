/**
 * If a token exists in local storage it is added to the headers
 * Accessing locale storage from the server will result in an error,
 * so the getItems is wrapped in a try catch block
 *
 * @param options
 * @returns
 */
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

/**
 * fetcher handles the fetch request and adds the authorization header if a token is present
 * it throws an error when response is not ok and returns the json response
 *
 * @param url
 * @param options
 * @returns
 */
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
