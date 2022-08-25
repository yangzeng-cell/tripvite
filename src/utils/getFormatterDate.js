export const getFormatterDate = (timestamp, fmt) => {
  const date = new Date(timestamp);

  const dateForm = {
    "y+": date.getFullYear(),
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };

  for (const key in dateForm) {
    const reg = new RegExp(key);
    if (reg.test(fmt)) {
      const value = (dateForm[key] + "").padStart(2, 0);
      fmt = fmt.replace(reg, value);
    }
  }
  return fmt;
};
