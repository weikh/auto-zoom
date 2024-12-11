import axios from "axios";
import authStore from "../../store/auth.store";
import { toast } from 'react-toastify';

const httpRequestAuth = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  params: {},
  timeout: 100000,
});

const errorHandler = (error) => {
  if (error?.response?.status === 401) {
    authStore.logout();
  }

  if (error?.response) {
    if (error.response?.data?.data) {
      toast.error(`REQUEST FAILED (${error.response.status}): ${JSON.stringify(error.response.data.data)}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(`REQUEST FAILED: Status code: ${error.response.status}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  } else {
    toast.error("REQUEST FAILED: No response received from server.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return Promise.reject(error.response);
};

httpRequestAuth.interceptors.request.use((config) => {
  const token = authStore.token.access_token;
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

httpRequestAuth.interceptors.response.use((response) => response.data.data, errorHandler);

export default httpRequestAuth;
