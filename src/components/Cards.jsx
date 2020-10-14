import React from "react";
import Favorite from "./Favorite";
import { Card, CardTitle, CardBody, Button, StyledLink } from "./styles";

const Cards = ({ id, comments, title, body, link, children }) => {
  let totalOfcomments = 0;
  return (
    <>
      <Card>
        {children}
        {link ? (
          <>
          <StyledLink to={{ pathname: `posts/${id}` }}>
            <CardTitle onClick={() => localStorage.setItem("pageComment", 1)}>
              {title}
            </CardTitle>
            </StyledLink>
            <CardBody>{body.slice(0, 100)}...</CardBody>
          </>
        ) : (
          <>
            <CardTitle>{title}</CardTitle>
            <CardBody>{body}</CardBody>
          </>
        )}

        {comments ? (
          <>
            <CardBody secondary>
              {comments.map((data) => {
                if (data.postId === id) {
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
          <StyledLink primary to={{ pathname: `posts/${id}` }}>
          <Button onClick={() => localStorage.setItem("pageComment", 1)}>
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
