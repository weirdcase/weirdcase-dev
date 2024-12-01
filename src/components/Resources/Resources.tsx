import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Shared/Card";

const Resources = () => {
  return (
    <div className='resources-section-wrapper'>
      <div className="container">
        <div className="resources-section container-fluid clearfix">
          <div className="card">
            <div className="card-header primary-heading">
              <FontAwesomeIcon icon={['fas', 'laptop-file']} /> Resources
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
            <div className="col col-sm-12 col-md-6 col-lg-4">
              <Card header="Featured" title="Card title" footer="Last updated 3 mins ago">
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-normal">Go somewhere</a>
              </Card>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-4">
              <Card header="Featured" title="Card title" footer="Last updated 3 mins ago">
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-normal">Go somewhere</a>
              </Card>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-4">
              <Card header="Featured" title="Card title" footer="Last updated 3 mins ago">
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-normal">Go somewhere</a>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;