import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { PostTitle } from "../post/PostTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <ReferenceInput source="post.id" reference="Post" label="post">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
        <TextInput label="text" multiline source="text" />
        <NumberInput step={1} label="upvotes" source="upvotes" />
      </SimpleForm>
    </Edit>
  );
};
