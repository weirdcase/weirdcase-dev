import { FC, PropsWithChildren } from 'react';
import CardType from '../../types/CardType';

const Card: FC<PropsWithChildren<CardType>> = ({
  children,
  header,
  imgsrc,
  imgalt,
  title,
  footer,
  visible = true,
  id,
}) => {
  if (!visible) return null;

  return (
    <div className="card dashboard-items" key={ id }>
      { header && (<div className="card-header">{ header }</div>)}
      { imgsrc && (<img src={ imgsrc } className="card-img-top" alt={ imgalt } />)}
      <div className="card-body">
        { title && (<h5 className="card-title">{ title }</h5>)}
        <div className="card-text">{ children }</div>
      </div>
      { footer && (
        <div className="card-footer">
          <small className="text-muted">{ footer }</small>
        </div>
      )}
    </div>
  );
};

export default Card;