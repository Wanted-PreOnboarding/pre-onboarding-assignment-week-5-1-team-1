import { CacheStorage } from "./CacheStorage" 

export const CacheService = {
  isCached(key){
    if(CacheStorage.get(key)) {
      return true;
    }
    return false;
  },

  setCacheItem(key, value){
    /* eslint-disable */
    console.log("캐시 설정");
    CacheStorage.set(key, value);
  },

  getCacheItem(key){
    /* eslint-disable */
    console.log("캐시 사용");
    return CacheStorage.get(key);
  },

  // todo
  deleteExpiredItem(){}
}