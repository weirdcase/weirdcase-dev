import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Shared/Card";

const Playground = () => {
  return (
    <div className='playground-section-wrapper'>
      <div className="container">
        <div className="playground-section container-fluid clearfix">
        <div className="card">
            <div className="card-header primary-heading">
              <FontAwesomeIcon icon={['fas', 'ranking-star']} /> Playground
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
            <div className="col col-sm-12 col-md-6 col-lg-4">
              <Card header="Featured" title="Prisoner's Dilemma" footer="Last updated months ago">
                <p>Play between <strong>two</strong> players using different <strong>strategies</strong> to find who wins!</p>
                <p>Available Strategies to choose from - <em id="strategiesList">Tit for tat, Attack, Generous, Unforgiving, Sneaky, Random, Jump, End up killing, Con</em></p>
                <a href="../../../../../gameTheory/index.html" className="btn btn-normal" target='_blank'>Play</a>
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
            <div className="col col-sm-12 col-md-6 col-lg-4">
              <Card title="Card title" imgsrc="https://imageplaceholder.net/400x150" imgalt="Placeholder image">
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-normal">Go somewhere</a>
              </Card>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-4">
              <Card title="Card title" imgsrc="https://imageplaceholder.net/400x150" imgalt="Placeholder image">
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-normal">Go somewhere</a>
              </Card>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-4">
              <Card title="Card title" imgsrc="https://imageplaceholder.net/400x150" imgalt="Placeholder image">
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

export default Playground;