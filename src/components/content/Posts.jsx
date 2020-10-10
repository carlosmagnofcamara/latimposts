import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Users from "./Users";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Favorite from "./Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: 280,
    margin: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const Posts = ({ id, post, title, body, users, comments }) => {
  const classes = useStyles();

  let totalOfcomments = 0;
  return (
    <>
    <Card className={classes.root}>
      <CardContent>
        {users.map((data) => {
          if (data.id === post.userId)
            return <Users key={data.id} name={data.name} email={data.email} />;
        })}
        <Typography className={classes.pos} color="textSecondary">
          {comments.map((data) => {
            if (data.postId === id) {
              totalOfcomments++;
            }
          })}
          <i>{totalOfcomments} comments</i>
        </Typography>
        <Typography
          variant="body2"
          component="p"
          component={Link}
          to={{ pathname: `posts/${id}` }}
        >
          {title}
          <br />
        </Typography>
        <Typography>
        {body.slice(0, 100)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link}
          to={{ pathname: `posts/${id}` }}>Learn More</Button>
      </CardActions>
      <Favorite id={id}/>
    </Card>
    </>
  );
};
export default Posts;
