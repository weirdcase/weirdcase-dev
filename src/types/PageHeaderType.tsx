import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

type PageHeaderType = {
  faPrefix: IconPrefix;
  faClass: IconName;
  children?: ReactNode;
  visible?: boolean;
};

export default PageHeaderType;