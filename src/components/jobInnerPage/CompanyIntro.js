import {useParams} from 'react-router-dom'
import useFetch from '../../useFetch'

const CompanyIntro = () => {
    const { id } = useParams();
    const { data: job_info, error, isPending } = useFetch('http://localhost:8000/job_offers/' + id);

    return ( 
        <div className="company-intro">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { job_info && (
                <div className="company-intro-card">
                    <section className="image">
                        <img src={job_info.logo} alt="" />
                    </section>
                    <section className="company-links">
                        <div className="company-link">
                            <h4>{job_info.company_name}</h4>
                            <span>{job_info.company_name.split(' ').join('-') + ".com"}</span>
                        </div>
                        <a href=" ">Company Site</a>
                    </section>
                </div>
            )}
        </div>
     );
}
 
export default CompanyIntro;