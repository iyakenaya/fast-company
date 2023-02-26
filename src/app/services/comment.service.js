import httpService from "./http.service";

const commentEnpoint = "comment/";

const commentService = {
  createComment: async (payload) => {
    const { data } = await httpService.put(
      commentEnpoint + payload._id,
      payload
    );
    return data;
  },
  getComments: async (pageId) => {
    const { data } = await httpService.get(commentEnpoint, {
      params: {
        orderBy: '"pageId"',
        equalTo: `"${pageId}"`
      }
    });
    return data;
  },
  removeComment: async (commentId) => {
    const { data } = await httpService.delete(commentEnpoint + commentId);
    return data;
  }
};
export default commentService;
