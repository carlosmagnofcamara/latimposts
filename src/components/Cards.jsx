import React, { Children } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Favorite from "./Favorite";
import Users from "../components/content/Users";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    maxWidth: 400,
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

const Cards = ({ id, comments, title, body, link, children }) => {
  const classes = useStyles();
  let totalOfcomments = 0;
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          {children}
          {link ? (
            <>
            <Typography
              variant="h5"
              component="p"
              style={{ textDecoration: "none" }}
              component={Link}
              to={{ pathname: `posts/${id}` }}
            >
              <b>{title}</b>
            </Typography>
            <Typography>{body.slice(0, 100)}...</Typography>
            </>
          ) : (
            <>
            <Typography variant="h5" component="p">
              <b>{title}</b>
            </Typography>
            <Typography>{body}</Typography>
            </>
          )}

          <Typography>{body.slice(0, 100)}...</Typography>
          {comments ? (
            <>
              <Typography className={classes.pos} color="textSecondary">
                {comments.map((data) => {
                  if (data.postId === id) {
                    totalOfcomments++;
                  }
                })}
                <i>{totalOfcomments} comments</i>
              </Typography>
            </>
          ) : (
            false
          )}
        </CardContent>
        {link ? (
          <CardActions>
            <Button
              size="small"
              component={Link}
              to={{ pathname: `posts/${id}` }}
            >
              Learn More
            </Button>
          </CardActions>
        ) : (
          false
        )}
        <Favorite id={id} />
      </Card>
    </>
  );
};
export default Cards;
