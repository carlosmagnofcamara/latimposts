import React from "react";
import Favorite from "../Favorite";
import { Card, CardTitle, CardBody, Button, StyledLink } from "../styles";

interface Props {
  id: number;
  comments: any;
  title: string;
  body: string;
  link: Boolean;
}

const Cards: React.FC<Props> = ({
  id,
  comments,
  title,
  body,
  link,
  children,
}) => {
  let totalOfcomments: number = 0;
  return (
    <>
      <Card>
        {children}
        {link ? (
          <>
            <StyledLink
              secondary={false}
              paginate={false}
              primary={false}
              to={{ pathname: `posts/${id}` }}
            >
              <CardTitle
                onClick={() => localStorage.setItem("pageComment", "1")}
              >
                {title}
              </CardTitle>
            </StyledLink>
            <CardBody secondary={false}
              paginate={false}
              primary={false}>{body.slice(0, 100)}...</CardBody>
          </>
        ) : (
            <>
              <CardTitle>{title}</CardTitle>
              <CardBody secondary={false}
                paginate={false}
                primary={false}>{body}</CardBody>
            </>
          )}

        {comments ? (
          <>
            <CardBody secondary={true}
              paginate={false}
              primary={false}>
              {comments[0].map((data: any) => {
                if (data.postId === Number(id)) {
                  totalOfcomments++;
                }
              })}
              <i>{totalOfcomments} comments</i>
            </CardBody>
          </>
        ) : (
            false
          )}
        {link ? (
          <StyledLink secondary={false}
            paginate={false}
            primary={true} to={{ pathname: `posts/${id}` }}>
            <Button 
            secondary={false}
            paginate={false}
            primary={false}
            onClick={() => localStorage.setItem("pageComment", "1")}>
              Learn More
            </Button>
          </StyledLink>
        ) : (
            false
          )}
        <Favorite id={id} />
      </Card>
    </>
  );
};

export default Cards;
