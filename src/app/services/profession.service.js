import httpService from "./http.service";

const professionEnpoint = "profession/";

const professionService = {
  get: async () => {
    const req = await httpService.get(professionEnpoint);
    return req.data;
  }
};
export default professionService;
