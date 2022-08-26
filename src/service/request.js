import axios from "axios";
import { BASE_URL, TIME_OUT } from "./config";
import useLoading from "@/store/useLoading";

const useLoadingStore = useLoading();
class Request {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    this.instance.interceptors.request.use(
      (config) => {
        useLoadingStore.changeLoading = true;
        return config;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        useLoadingStore.changeLoading = false;
        return res;
      },
      (err) => {
        useLoadingStore.changeLoading = false;
        return err;
      }
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new Request(BASE_URL, TIME_OUT);
