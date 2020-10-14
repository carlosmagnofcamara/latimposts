import React from "react";
import Users from "./Users";
import Cards from "../Cards";

const Posts = ({ id, post, title, body, users, comments }) => {
  return (
    <>
      <Cards
        id={id}
        post={post}
        title={title}
        body={body}
        users={users}
        comments={comments}
        link={true}
      >
        {users.map((data) => {
          if (data.id === post.userId)
            return <Users key={data.id} name={data.name} email={data.email} />;
        })}
      </Cards>
    </>
  );
};
export default Posts;
