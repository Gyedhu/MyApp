import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Age" source="age" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Fullname" source="fullname" />
        <TextField label="ID" source="id" />
        <TextField label="Job" source="job" />
        <TextField label="Phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
