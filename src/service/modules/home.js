import request from "./../request";
export const hotSuggestAPI = () => {
  return request.get({
    url: "/home/hotSuggests",
  });
};

export const getCatagoryAPI = () => {
  return request.get({
    url: "/home/categories",
  });
};

export const getHotListAPI = (idx) => {
  return request.get({
    url: "/home/houselist",
    params: {
      page: idx,
    },
  });
};
