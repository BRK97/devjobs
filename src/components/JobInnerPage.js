import { useParams, useLocation } from "react-router-dom";
import useFetch from "../useFetch";
import CompanyIntro from "./jobInnerPage/CompanyIntro";
import Position from "./jobInnerPage/Position";

const JobInnerPage = (props) => {
    const { id, search } = useParams();
    // const temp = props.location.temp;
    // const location = useLocation();
    // const temp = location.state?.temp;
    const { data: job_offer, error, isPending } = useFetch('http://localhost:8000/job_offers/' + id);

    return ( 
        <div className="job-inner-page">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { job_offer && (
                <div className="content">
                    <h1>{search}</h1>
                    <CompanyIntro data = {job_offer}/>
                    <Position data = {job_offer} />
                </div>
            )}
        </div>
     )
}
 
export default JobInnerPage;