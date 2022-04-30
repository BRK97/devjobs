import JobOffer from "./JobOffer";
import useFetch from "../useFetch";

const JobOfferPage = () => {

    const {error, isPending, data:job_offers} = useFetch('http://localhost:8000/job_offers');

    return ( 
        <div className="job-offer-page">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {job_offers &&(
                <JobOffer job_offers ={job_offers}/>
            )}
        </div>
    )};
 
export default JobOfferPage;