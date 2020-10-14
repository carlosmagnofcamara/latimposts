import React from "react";
import {Author} from './styles';

const Users = ({ name, email }) => {
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
