import httpService from "./http.service";

const qualityEnpoint = "quality/";

const qualityService = {
  fetchAll: async () => {
    const { data } = await httpService.get(qualityEnpoint);
    return data;
  }
};
export default qualityService;
