import React from "react";
import {Author} from './styles';

interface Props {
  name: string;
  email: string;
}
const Users: React.FC<Props> = ({ name, email }) => {
  return (
    <>
    <Author>
      {name}
      </Author>
      <Author>
        <i>
        {` <${email}>`} 
        </i>
    </Author>
    <br />
    </>
  );
};
export default Users;
