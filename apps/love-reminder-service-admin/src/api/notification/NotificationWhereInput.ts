import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type NotificationWhereInput = {
  frequency?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
};
