import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MessageWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
};
