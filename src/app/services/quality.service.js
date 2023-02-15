import httpService from "./http.service";

const qualityEnpoint = "quality/";

const qualityService = {
  fetchAll: async () => {
    const req = await httpService.get(qualityEnpoint);
    return req.data;
  }
};
export default qualityService;
