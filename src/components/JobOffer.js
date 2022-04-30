import {Link, useParams} from "react-router-dom"
import ReactPaginate from "react-paginate";
import React, { useState } from "react";

const JobOffer = ({job_offers}) => {

    const [offers, setOffers] = useState(job_offers);
    const[filteredList, setFilteredList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const offersPerPage = 15;
    const pagesVisited = pageNumber * offersPerPage;
    const pageCount = Math.ceil(offers.length / offersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const documentUrl = document.URL;
    const myArray = documentUrl.split('%%').splice(1,3);
    console.log(myArray);

    const filter = (offers, myArray) => {
        setFilteredList(()=>{offers.filter((offer)=>{})})
    }

    
    const displayOffers = offers
    .slice(pagesVisited, pagesVisited + offersPerPage)
    .map((job_offer)=>{
        return(
            <div className="job-offer-card" key={job_offer.id}>
            <div className="company-logo">
                <img src={job_offer.logo} alt="company logo" />
            </div>
                <Link to={`/jobs/${job_offer.id}`}>
                <div className="company-card">
                    <p className="job-card-details">
                        <span className="position-details">
                            {job_offer.date_posted} ago<span id="dot"> </span> {job_offer.job_type}
                        </span>
                        
                            <h4 className="job-position">{job_offer.experience_level} {job_offer.job_title.replace('Junior', '').replace('Senior', '')}</h4>
                        <span className="company-name">{job_offer.company_name}</span>
                    </p>
                    <span className="company-loaction">
                    {job_offer.city}, <span id="company-location">{job_offer.country}</span>
                    </span>
                </div>
                </Link>
            </div>
            )
    })

    return(
    <div className="the-job-offers">
        <div className="temp">
            {displayOffers}
        </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
    )

    // return (
    //     job_offers.map((job_offer)=>{
    //         return(
            
    //         <div className="job-offer-card" key={job_offer.id}>
    //         <div className="company-logo">
    //             <img src={job_offer.logo} alt="company logo" />
    //         </div>
    //             <Link to={`/jobs/${job_offer.id}`}>
    //             <div className="company-card">
    //                 <p className="job-card-details">
    //                     <span className="position-details">
    //                         {job_offer.date_posted} ago<span id="dot"> </span> {job_offer.job_type}
    //                     </span>
                        
    //                         <h4 className="job-position">{job_offer.experience_level} {job_offer.job_title.replace('Junior', '').replace('Senior', '')}</h4>
    //                     <span className="company-name">{job_offer.company_name}</span>
    //                 </p>
    //                 <span className="company-loaction">
    //                 {job_offer.city}, <span id="company-location">{job_offer.country}</span>
    //                 </span>
    //             </div>
    //             </Link>
    //         </div>
    //         )
    //         }) 
    //  );
}
 
export default JobOffer