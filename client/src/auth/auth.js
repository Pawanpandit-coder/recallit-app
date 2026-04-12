import { jwtDecode } from "jwt-decode";

export const isTokenExpired = () => {
  const data = localStorage.getItem("data");
  const token = JSON.parse(data)?.token;
  if (!token) return true;

  try {
    const decoded = jwtDecode(token);

    const currentTime = Date.now() / 1000; // seconds me

    return decoded.exp < currentTime;
  } catch (err) {
    return true; // invalid token
  }
};
