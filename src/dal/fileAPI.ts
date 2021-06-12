import axios from "axios";
import { BASEURL } from "./constants";

const instance = axios.create({
  baseURL: BASEURL,
});

export const fileAPI = {
  getData() {
    return instance.get(``);
  },
  getDataById(id: number) {
    return instance.get(`?dirId=${id}`);
  },
};