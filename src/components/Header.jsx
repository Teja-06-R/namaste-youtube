import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { toggleTheme } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheData } from "../utils/cacheSlice";

const Header = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions,setshowSuggestions]=useState(false);
  const dispatch = useDispatch();
  const searchCache=useSelector(store=>store.cache);
  const darkMode = useSelector((store) => store.app.darkmode);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    //now its call api for each key press
    // we need to make api call if the time between 2 key presses is >200ms
    //otherwise then skip the API call
    const timer = setTimeout(() =>{ 
      if (searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions();
      }
      }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    //console.log(json[1]);
    dispatch(cacheData(
      {[searchQuery]:json[1]}
    ))
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white grid grid-flow-col  shadow-2xl">
      <div className="flex col-span-1">
        <div className="p-2 m-3">
          <img
            onClick={() => {
              toggleMenuHandler();
            }}
            className="h-8 cursor-pointer"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=="
            alt="menu"
          />
        </div>
        <img
          className="h-18 px-2"
          alt="logo"
          src="data:image/png;base64,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"
        />
      </div>
      <div className="relative p-2 m-3 col-span-10 px-15">
        <input
          type="text"
          className="p-2 w-1/2 border border-gray-400 rounded-l-full"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
          onFocus={()=>setshowSuggestions(true)}
          onBlur={()=>setshowSuggestions(false)}
        />
        <button className="border border-gray-400 py-2 px-5 rounded-r-full hover:bg-gray-100">
          🔍
        </button>
        {showSuggestions && <div className="absolute py-2 px-4 bg-white w-[26rem] shadow-lg rounded-lg border border-gray-100">
        <ul>{suggestions.map(s=><li className="py-2 px-3 hover:bg-gray-100" key={s}>{s}</li>)}
          
          
          </ul>
      </div>}
      </div>
      

      <div className="p-2 m-2 col-span-1">
        <img
          className="h-10 "
          alt="user-icon"
          src="data:image/png;base64,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"
        />
      </div>
      <button
        onClick={() => dispatch(toggleTheme())}
       
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
      
    </div>
  );
};

export default Header;


//  className="ml-4 px-3 py-1 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"