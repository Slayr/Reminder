import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MilestoneWhereInput = {
  id?: StringFilter;
  label?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
