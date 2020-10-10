import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../content/Comments";
import CommentService from "../../services/comments";
import UserService from "../../services/users";
import PostService from "../../services/posts";
import Container from "../../Container";
import { Divider, Typography } from "@material-ui/core";
import Header from "../Header";
import Loader from "../Loader";

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
            <Header
              titulo={`This is a post from ${userName}, leave your comment`}
              bool={true}
            />
            <div style={{ textAlign: "center" }}>
              <Typography variant="h4" gutterBottom>
                {titulo}
              </Typography>
            </div>
            <div>
              <Typography variant="h6" gutterBottom>
                <i>{`${userName} <${email}>`}</i>
              </Typography>
            </div>

            <div>
              <Typography variant="h5" gutterBottom>
                {body}
              </Typography>
            </div>
            <br />
            <Divider variant="middle" />
            <i>
              <Typography variant="subtitle1" gutterBottom>
                Comments
              </Typography>
            </i>
            {commentsControl}
          </Container>
        </>
      )}
    </>
  );
};
export default PostsPage;
