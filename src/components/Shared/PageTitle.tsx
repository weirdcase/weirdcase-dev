import { FC, PropsWithChildren } from 'react';
import PageHeaderType from '../../types/PageHeaderType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PageTitle: FC<PropsWithChildren<PageHeaderType>> = ({
  faPrefix,
  faClass,
  visible = true,
  children
}) => {
  if (!visible) return null;

  return (
    <div className="card-header primary-heading">
      <FontAwesomeIcon icon={[faPrefix, faClass]} /> { children }
    </div>
  );
};

export default PageTitle;
