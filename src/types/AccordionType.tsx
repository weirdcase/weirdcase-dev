import { ReactNode } from "react";

type AccordionType = {
  idname?: string;
  btntext?: string;
  visible?: boolean;
  children?: ReactNode;
};

export default AccordionType;