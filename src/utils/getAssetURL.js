export const getAssetURL = (url) => {
  console.log(url);
  return new URL(`../assets/img/${url}`, import.meta.url).href;
};
