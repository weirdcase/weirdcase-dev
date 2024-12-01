import { Link } from 'react-router-dom';
import './Dashboard.scss';
import Card from '../Shared/Card';

const Dashboard = () => {
  return (
    <div className='dashboard-section-wrapper'>
      <div className="container">
        <div className="dashboard-section container-fluid clearfix">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col col-sm-12 col-md-6 col-lg-4">
              <Card header="Featured" title="Prisoner's Dilemma" footer="Last updated months ago">
                <p>Play between <strong>two</strong> players using different <strong>strategies</strong> to find who wins!</p>
                <p>Available Strategies to choose from - <em id="strategiesList">Tit for tat, Attack, Generous, Unforgiving, Sneaky, Random, Jump, End up killing, Con</em></p>
                <a href="../../../../../gameTheory/index.html" className="btn btn-normal" target='_blank'>Play</a>
              </Card>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-4">
              <Card header="Featured" title="Competition" footer="Last updated years ago">
                  <p>Competition? What is it exactly? We compete with others and find what?</p>
                  <p>Satisfaction? Win? Is that all that’s important?</p>
                  <Link to="/blog" className="btn btn-normal">Read more</Link>
              </Card>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-4">
              <Card header="Featured" title="Engineers Diary" footer="Last updated years ago" imgsrc="images/engineersdiary.png" imgalt="Engineers Diary">
                <p>An attempt to share thoughts, articles, suggestions, opinions, views and ideas.</p>
                <a href="https://niloydatta.blogspot.com/" className="btn btn-normal" target="_blank">Learn more</a>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;