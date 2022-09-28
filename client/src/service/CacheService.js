import { CacheStorage } from "./CacheStorage" 

export const CacheService = {
  isCached(key){
    if(CacheStorage.get(key)) {
      return true;
    }
    return false;
  },

  setCacheItem(key, value){
    CacheStorage.set(key, value);
  },

  getCacheItem(key){
    return CacheStorage.get(key);
  },

  // todo
  deleteExpiredItem(){}
}