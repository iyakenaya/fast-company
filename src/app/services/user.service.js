import httpService from "./http.service";

const userEnpoint = "user/";

const userService = {
  get: async () => {
    const req = await httpService.get(userEnpoint);
    return req.data;
  }
};
export default userService;
