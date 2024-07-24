import { PageWhereInput } from "./PageWhereInput";
import { PageOrderByInput } from "./PageOrderByInput";

export type PageFindManyArgs = {
  where?: PageWhereInput;
  orderBy?: Array<PageOrderByInput>;
  skip?: number;
  take?: number;
};
