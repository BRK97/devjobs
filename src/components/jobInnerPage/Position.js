import {useParams} from 'react-router-dom'
import useFetch from '../../useFetch'

const Position = () => {

    const { id } = useParams();
    const { data: job_offer, error, isPending } = useFetch('http://localhost:8000/job_offers/' + id);

    return ( 
        <div className="position">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { job_offer && (
                <div className="content">
                    <div className="header">
                        <div>
                            <span>{job_offer.date_posted} ago<span className="dot"></span>{job_offer.job_type}</span>
                            <h2>{job_offer.experience_level + " " + job_offer.job_title.replace('Junior', '').replace('Senior', '')}</h2>
                            <span id="country">{job_offer.country}</span>
                        </div>
                        <a href=" ">Apply Now</a>
                    </div>
                    <div className="body">
                        <h2>About Us</h2>
                        <p>{job_offer.company_description}</p>
                        <h2>Requirments</h2>
                        <p>
                            {job_offer.requirments}
                            <ul>
                                <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</span></li>
                                <li><span>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</span></li>
                                <li><span>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span></li>
                                <li><span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</span></li>
                                <li><span>xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></li>
                            </ul>
                        </p>
                        <h2>What You Will Do</h2>
                        <p>
                            {job_offer.requirments}
                            <ol>
                                <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</span></li>
                                <li><span>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</span></li>
                                <li><span>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span></li>
                                <li><span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</span></li>
                                <li><span>xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></li>
                            </ol>
                        </p>
                        <div className="closer">
                            <div>
                                <h2>{job_offer.experience_level + " " + job_offer.job_title.replace('Junior', '').replace('Senior', '')}</h2>
                                <span>{job_offer.company_name}</span>
                            </div>
                            <a href=" ">Apply Now</a>
                        </div>

                    </div>
                </div>
            )}

        </div>
     );
}
 
export default Position;