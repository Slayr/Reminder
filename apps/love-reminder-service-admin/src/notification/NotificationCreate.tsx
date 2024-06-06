import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="frequency" source="frequency" />
        <BooleanInput label="isActive" source="isActive" />
      </SimpleForm>
    </Create>
  );
};
