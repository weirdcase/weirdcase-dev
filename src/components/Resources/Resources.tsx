import Card from "../Shared/Card";
import ResourcesCardList from "../../data/resources-cards";
import PageTitle from "../Shared/PageTitle";

const Resources = () => {
  return (
    <div className='resources-section-wrapper'>
      <div className="container">
        <div className="resources-section container-fluid clearfix">
          <div className="card">
            <PageTitle faPrefix='fas' faClass='laptop-file'>Resources</PageTitle>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
            { Array.isArray(ResourcesCardList) && ResourcesCardList.map((item, index) => ( 
              <div className="col col-sm-12 col-md-6 col-lg-4" key={item.id || index}>
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

export default Resources;