import { FC, PropsWithChildren } from 'react';
import AccordionType from '../../types/AccordionType';

const Accordion: FC<PropsWithChildren<AccordionType>> = ({
  idname,
  btntext,
  visible = true,
  children,
}) => {
  if (!visible) return null;

  return (
    <div className="accordion blog-content" id={`accordion-${idname}`}>
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading-${idname}`}>
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${idname}`} aria-expanded="true" aria-controls={`collapse-${idname}`}>
            { btntext }
          </button>
        </h2>
        <div id={`collapse-${idname}`} className="accordion-collapse collapse" aria-labelledby={`heading-${idname}`} data-bs-parent={`#accordion-${idname}`}>
          <div className="accordion-body">
            <div className="card-text">
              { children }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
