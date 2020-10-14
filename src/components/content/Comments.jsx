import React from "react";
import { TitleComments, BodyComments } from "./styles";

const Comments = ({name, email, comment}) => {
  return <>
  <TitleComments>
  <b>{email}</b>{` <${name}>`}
  </TitleComments>
    <BodyComments>
    {comment}
    </BodyComments>
  </>;
};
export default Comments;