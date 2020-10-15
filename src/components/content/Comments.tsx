import React from "react";
import { TitleComments, BodyComments } from "./styles";

interface Props {
  name: string;
  email: string;
  comment: string;
}

const Comments:React.FC<Props> = ({name, email, comment}) => {
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