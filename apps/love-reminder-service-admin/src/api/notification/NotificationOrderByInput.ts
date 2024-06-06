import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  frequency?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  updatedAt?: SortOrder;
};
