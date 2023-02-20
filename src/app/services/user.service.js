import httpService from "./http.service";

const userEnpoint = "user/";

const userService = {
  get: async () => {
    const req = await httpService.get(userEnpoint);
    return req.data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(userEnpoint + payload._id, payload);
    return data;
  }
};
export default userService;
