import request from "../request";

export const getDetailAPI = (houseId) => {
  return request.get({
    url: `detail/infos?houseId=${houseId}`,
  });
};
