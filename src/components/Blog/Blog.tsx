import './Blog.scss'
import Accordion from '../Shared/Accordion'
import BlogAccordionsList from '../../data/blog-accordions';
import PageTitle from '../Shared/PageTitle';

const Blog = () => {
  return (
    <div className='blog-section-wrapper'>
      <div className="container">
        <div className="blog-section container-fluid clearfix">
          <div className="card">
            <PageTitle faPrefix='far' faClass='newspaper'>Blogs and Articles</PageTitle>
          </div>
          { Array.isArray(BlogAccordionsList) && BlogAccordionsList.map((accordion) => 
            <div key={accordion.idname}>
              <Accordion idname={accordion.idname} btntext={accordion.btntext}>
                { accordion.children }
              </Accordion>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;