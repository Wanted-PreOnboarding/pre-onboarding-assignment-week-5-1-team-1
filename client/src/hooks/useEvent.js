import { useState, useEffect} from 'react';

const useEvent = () => {
	const [curLocation, setCurLocation] = useState(0)
	const [isOpenRecommend, setOpenRecommend] = useState(false)

	function handleNavigate(e){
		const {key} = e
		if(key === 'ArrowDown'){
			setCurLocation(curLocation + 1)
		}else if(key === 'ArrowUp'){
			setCurLocation(curLocation - 1)
		}
	}

	function escapeSearchBar(e){
		if(e.target.innerText !== "" ){
			setOpenRecommend(false)
		}else{
			setOpenRecommend(true)
		}
	}

	useEffect(() => {
    window.addEventListener("click", escapeSearchBar);
    return () => {
      window.removeEventListener("click", escapeSearchBar);
    };
  }, []);


	return {handleNavigate, curLocation, isOpenRecommend,setOpenRecommend}
};

export default useEvent;