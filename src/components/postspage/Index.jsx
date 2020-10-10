import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Comments from "../content/Comments";
import CommentService from "../../services/comments";
import UserService from "../../services/users";
import PostService from "../../services/posts";
import Container from "../../Container";
import { Typography } from "@material-ui/core";
import Header from "../Header";
import Footer from '../Footer';
import Loader from "../Loader";
import Users from "../content/Users";
import Cards from '../Cards';

const PostsPage = () => {
  let commentPost = 0;
  let userId = 0;
  let userName = "";
  let email = "";
  let titulo = "";
  let body = "";
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentComment, setCurrentComment] = useState(1)
  const [commentPerPage] = useState(2);
  const [postsPerPage] = useState(10);
  const { id } = useParams();
  const history = useHistory();

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

  const paginate = (pageNumber) => {
    setCurrentComment(pageNumber)
    localStorage.setItem('page', pageNumber); //envia a pagina clicada via localstorage para o component content/index
    //history.push('/')
  };

  const lastComment = currentComment * commentPerPage;
  const firstComment = lastComment - commentPerPage;
  const teste = comments.slice(firstComment, lastComment)
  
  comments.map((element) => {
    if (Number(id) === Number(element.postId)) {
      commentPost++;
    }
  });
  posts.map((element) => {
    if (Number(id) === Number(element.id)) {
      userId = element.userId;
      titulo = element.title;
      body = element.body;
    }
  });
  users.map((element) => {
    if (element.id === userId) {
      userName = element.name;
      email = element.email;
    }
  });
  const commentsControl = teste.map((element) => {
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
              <Cards id={id} body={body} title={titulo} link={false} >
                <Users name={userName} email={email} />
              </Cards>
              
              {/* divisor área de commentarios */}

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
          <Footer
            postsPerPage={commentPerPage}
            totalPosts={commentPost}
            paginate={paginate}
          />
        </>
      )}
    </>
  );
};
export default PostsPage;
