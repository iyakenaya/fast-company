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
  },
  update: async (payload) => {
    // не post потому что нужно будет в useAuth изначально добавлять данные которые уже есть иначе сотрутся данные которые мы не обновляем
    const { data } = await httpService.patch(
      userEnpoint + localStorageService.getUserId(),
      payload
    );
    return data;
  }
};
export default userService;
