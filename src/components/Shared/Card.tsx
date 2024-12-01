import { FC, PropsWithChildren } from 'react';

type CardProps = {
  header?: string;
  title?: string;
  imgsrc?: string;
  imgalt?: string;
  footer?: string;
  visible?: boolean;
};

const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  header,
  imgsrc,
  imgalt,
  title,
  footer,
  visible = true,
}) => {
  if (!visible) return null;

  return (
    <div className="card dashboard-items">
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