import httpService from "./http.service";

const professionEnpoint = "profession/";

const professionService = {
  get: async () => {
    const { data } = await httpService.get(professionEnpoint);
    return data;
  }
};
export default professionService;
