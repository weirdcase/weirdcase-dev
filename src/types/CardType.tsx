import { ReactNode } from "react";

type CardType = {
  id?: string;
  header?: string;
  title?: string;
  imgsrc?: string;
  imgalt?: string;
  footer?: string;
  visible?: boolean;
  children?: ReactNode;
};
export default CardType;

// // Array<string>;