import { SortOrder } from "../../util/SortOrder";

export type MilestoneOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  label?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
