import axios from "axios";

export const backendInstance = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

export const kakaoInstance = axios.create({
  baseURL: "https://dapi.kakao.com/v2/local",
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`
  }
})