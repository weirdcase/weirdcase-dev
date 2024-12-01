import { Link } from "react-router-dom";
import PageTitle from "../Shared/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageNotFound = () => {
  return (
    <div className='pageNotFound-section-wrapper'>
      <div className="container">
        <div className="pageNotFound-section container-fluid clearfix">
          <div className="card">
            <PageTitle faPrefix='fas' faClass='ban'>404 Page Not Found</PageTitle>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
            :( :O :( :| :) go back <Link to="/" className="btn btn-normal"> <FontAwesomeIcon icon={['far', 'face-sad-tear']} /> Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;