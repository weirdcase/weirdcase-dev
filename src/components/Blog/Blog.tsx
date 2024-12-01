import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Blog.scss'
import Accordion from '../Shared/Accordion'
import BlogAccordionsList from '../../data/blog-accordions';

const Blog = () => {
  return (
    <div className='blog-section-wrapper'>
      <div className="container">
        <div className="blog-section container-fluid clearfix">
          <div className="card">
            <div className="card-header primary-heading">
              <FontAwesomeIcon icon={['far', 'newspaper']} /> Blogs and Articles
            </div>
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