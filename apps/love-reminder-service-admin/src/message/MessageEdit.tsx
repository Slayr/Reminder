import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="text" source="text" />
      </SimpleForm>
    </Edit>
  );
};
