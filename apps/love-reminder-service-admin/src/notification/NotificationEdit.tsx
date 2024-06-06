import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="frequency" source="frequency" />
        <BooleanInput label="isActive" source="isActive" />
      </SimpleForm>
    </Edit>
  );
};
