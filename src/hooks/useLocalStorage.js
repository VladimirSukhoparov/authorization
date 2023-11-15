export const useLocalStorage = () => {
  const readLS = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return localStorage.getItem(key);
    }
  };

  const writeLS = (key, value) => {
    const storage = readLS(key) || [];
    storage.push(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  const removeLS = (key) => {
    localStorage.removeItem(key);
  };

  return { readLS, writeLS, removeLS };
};
