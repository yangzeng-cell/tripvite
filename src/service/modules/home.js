import request from "./../request";
export const hotSuggestAPI = () => {
  return request.get({
    url: "/home/hotSuggests",
  });
};
