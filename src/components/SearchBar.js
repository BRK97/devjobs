import {IoLocationSharp,IoSearchSharp } from "react-icons/io5";
import { IconContext } from "react-icons"
import {Link, useLocation} from "react-router-dom"
import {useState} from "react"

const SearchBar = () => {

    const [whatJob, setWhatJob] = useState(null);
    const [whatCountry, setWhatCountry] = useState(null);
    const [isFto, setIsFto] = useState(false);
    
    // const search = useLocation().search;
    // const name = new URLSearchParams(search).get('name');
    // const id = new URLSearchParams(search).get('id');

    return (
        

        <div className="search">
                <form>
                <IconContext.Provider value={{color:"#5964e0",className: "global-class-name"}}>
                    <div className="job-filter">
                        <label><IoSearchSharp/></label>
                        <input placeholder="Filter by title, companies, expertise..."
                        type="text"
                        value={whatJob}
                        onChange={(e) => setWhatJob(e.target.value)}
                         />
                    </div>
                    <div className="location-filter">
                        <label><IoLocationSharp/></label>
                        <input placeholder="Filter by location..."
                        type="text" 
                        value={whatCountry}
                        onChange={(e) => setWhatCountry(e.target.value)}
                         />
                    </div>
                    <div className="filter-search">
                        <div className="filter-search-option">
                            <input type="checkbox"
                            value={isFto}
                            onChange={()=>{setIsFto(current => !current)}}
                            ></input>
                            <label>Full Time Only</label>
                        </div>
                        <Link to={{pathname:"/jobs", search: ('%%' + whatJob + '%%' + whatCountry +'%%' + isFto)}}><button id="search">Search</button></Link>
                    </div>
                    
                </IconContext.Provider>
                </form>
            </div>
     );
}
 
export default SearchBar;