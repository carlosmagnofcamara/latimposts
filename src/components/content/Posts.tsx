import React from "react";
import Users from "./Users";
import Cards from "../Cards";

interface Props {
  id: number;
  post: any;
  title: string;
  body: string;
  users: any;
  comments: any;
}
const Posts:React.FC<Props> = ({ id, post, title, body, users, comments }) => {
  return (
    <>
      <Cards
        id={id}
        title={title}
        body={body}
        comments={comments}
        link={true}
      >
        {users[0].map((data: any) => {
          if (data.id === post.userId)
            return <Users key={data.id} name={data.name} email={data.email} />;
        })}
      </Cards>
    </>
  );
};
export default Posts;
