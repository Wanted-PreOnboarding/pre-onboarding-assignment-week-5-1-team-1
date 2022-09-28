import { useEffect, useState } from 'react'
import { getSearchResult } from '../api/searchApi'
import { debounce } from '../util/debounce'

import { CacheService } from '../service/CacheService'

function useSearch() {
  const [input, setInput] = useState("");
  const [searchList, setSearchList] = useState([]);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  }

  const getResults = (value) => {
    if (CacheService.isCached(value)) {
      setSearchList(JSON.parse(CacheService.getCacheItem(value)));
    } else {
      getSearchResult(value).then(data => {
        CacheService.setCacheItem(value, JSON.stringify(data));
        setSearchList(data)
      })
    }
  }

  useEffect(() => {
    if(input.length > 0) {
      debounce(getResults(input), 300);
    }
    if(input.length === 0) {
      setSearchList([]);
    }
  }, [input])

  return {input, searchList, onChangeInput};
}

export default useSearch;