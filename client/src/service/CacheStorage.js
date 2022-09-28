export const CacheStorage = {
  set(key, value){
    sessionStorage.setItem(key, value);
  },

  get(key){
    return sessionStorage.getItem(key);
  }
}