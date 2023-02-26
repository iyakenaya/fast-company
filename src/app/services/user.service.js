import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const userEnpoint = "user/";

const userService = {
  get: async () => {
    const { data } = await httpService.get(userEnpoint);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(userEnpoint + payload._id, payload);
    return data;
  },
  getCurrentUser: async () => {
    const { data } = await httpService.get(
      userEnpoint + localStorageService.getUserId()
    );
    return data;
  }
};
export default userService;
