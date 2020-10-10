import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Comments from "../content/Comments";
import CommentService from "../../services/comments";
import UserService from "../../services/users";
import PostService from "../../services/posts";
import Container from "../../Container";
import { Card, CardContent, Typography } from "@material-ui/core";
import Header from "../Header";
import Loader from "../Loader";
import Users from "../content/Users";
import Favorite from "../content/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    maxWidth: "100%",
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

const PostsPage = () => {
  let userId = 0;
  let userName = "";
  let email = "";
  let titulo = "";
  let body = "";
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  const classes = useStyles();

  const getDatas = useCallback(async () => {
    const dataUsers = await UserService.getUsers();
    const dataPosts = await PostService.getPosts();
    const dataComments = await CommentService.getComments();
    setUsers(dataUsers.data);
    setPosts(dataPosts.data);
    setComments(dataComments.data);
    setLoader(false);
  }, []);

  useEffect(() => {
    getDatas();
  }, [getDatas]);

  const commentsControl = comments.map((element) => {
    if (Number(id) === Number(element.postId)) {
      return (
        <Comments
          key={element.id}
          name={element.name}
          email={element.email}
          comment={element.body}
        />
      );
    }
  });
  const postsControl = posts.map((element) => {
    if (Number(id) === Number(element.id)) {
      userId = element.userId;
      titulo = element.title;
      body = element.body;
    }
  });
  const usersControl = users.map((element) => {
    if (element.id === userId) {
      userName = element.name;
      email = element.email;
    }
  });

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Container>
            <div style={{ backgroundColor: "white" }}>
              <Header
                titulo={`This is a post from ${userName}, leave your comment`}
                bool={true}
              />
              <Card className={classes.root}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    {titulo}
                  </Typography>
                  <Users name={userName} email={email} />
                  <br />
                  <Typography variant="h5" gutterBottom>
                    {body}
                  </Typography>
                </CardContent>
                <Favorite id={id}/>                
              </Card>
              <div style={{ margin: "20px" }}>
                <i>
                  <Typography variant="subtitle1" gutterBottom>
                    Comments bellow
                  </Typography>
                </i>
              </div>
              <br />
              {commentsControl}
            </div>
          </Container>
        </>
      )}
    </>
  );
};
export default PostsPage;
