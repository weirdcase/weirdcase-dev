import './Dashboard.scss';
import Card from '../Shared/Card';
import DashboardCardList from '../../data/dashboard-cards'

const Dashboard = () => {
  console.log(DashboardCardList);
  return (
    <div className='dashboard-section-wrapper'>
      <div className="container">
        <div className="dashboard-section container-fluid clearfix">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            { Array.isArray(DashboardCardList) && DashboardCardList.map((item, index) => ( 
              <div key={item.id || index} id={item.id} className="col col-sm-12 col-md-6 col-lg-4" >
                <Card header={item.header} title={item.title} footer={item.footer} imgsrc={item.imgsrc} imgalt={item.imgalt}>
                  { item.children }
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;