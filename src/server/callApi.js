import jwtDecode from 'jwt-decode';

const ACCESS_TOKEN_STORAGE_KEY = "accessToken";
const REFRESH_TOKEN_STRORAGE_KEY = "refreshToken";
const MILISECONDS_IN_SECOND = 1000;
const ACCESS_TOKEN_UPDATE_DIFF = 60;

const decodeToken = (token) => {
  try {
    tokenData = jwtDecode(token);
  }
  catch (e) {
    console.warn(e);
  };
  return token;
}

const updateTokens = async () => {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_STRORAGE_KEY);

  const response = await fetch("auth/refresh", {
    mwthod: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken })
  });

  const data = response.json();

  if (response.ok) {
    localStorage.setItem({
      ACCESS_TOKEN_STORAGE_KEY: data.accessToken,
      REFRESH_TOKEN_STRORAGE_KEY: data.refreshToken
    });
    return data.accessToken;
  }
  else if (data.error) {
    throw new Error(data.error);
  };
}

const isTokenValid = (expiresAt) => {
  const currentTime = Math.round(Date.now() / MILISECONDS_IN_SECOND);
  const diffExpireTime = tokenData.exp - currentTime;
  return diffExpireTime > ACCESS_TOKEN_UPDATE_DIFF;
}

const getAccessToken = async () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
  const tokenData = decodeToken(accessToken);
  const isAccessTokenValid = isTokenValid(tokenData.exp);

  if (!isAccessTokenValid) {
    return await updateTokens();
  };

  return accessToken;
}

const callApi = (url, method, body) => {
  const accessToken = await getAccessToken();

  return fetch(url, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(body)
  });
}
