import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../content/Comments";
import CommentService from "../../services/comments";
import UserService from "../../services/users";
import PostService from "../../services/posts";
import Container from "../../Container";
import Header from "../header/Header";
import Footer from '../footer/Footer';
import Loader from "../../Loader";
import Users from "../content/Users";
import Cards from '../cards/Cards';
import { Texts } from './styles';


interface IUser {
  id: number;
  name: string;
  email: string;
}

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Param {
  id: number;
}

const PostsPage = () => {
  let commentPost: number = 0;
  let userId: number = 0;
  let userName: string = "";
  let email: string = "";
  let titulo: string = "";
  let body: string = "";
  const [users, setUsers] = useState<IUser[]>();
  const [posts, setPosts] = useState<IPost[]>();
  const [comments, setComments] = useState<IComments[]>();
  const [loader, setLoader] = useState(true);
  const [currentComment, setCurrentComment] = useState(1)
  const [commentPerPage] = useState(2);
  const { id }: any = useParams();

  const getDatas = useCallback(async () => {
    const dataUsers = await UserService.getUsers(null);
    const dataPosts = await PostService.getPosts(null);
    const dataComments = await CommentService.getComments(null);
    setUsers(dataUsers.data);
    setPosts(dataPosts.data);
    setComments(dataComments.data);
    setLoader(false);
  }, []);

  useEffect(() => {
    getDatas();
  }, [getDatas]);

  const paginate = (pageNumber: number) => {
    setCurrentComment(pageNumber)
    localStorage.setItem('pageComment', pageNumber.toString()); //envia a pagina clicada via localstorage para o component content/index
  };

  const lastComment = currentComment * commentPerPage;
  const firstComment = lastComment - commentPerPage;
  const teste = comments?.slice(firstComment, lastComment)
  
  comments?.map((element) => {
    if (Number(id) === element.postId) {
      commentPost++;
    }
  });
  posts?.map((element) => {

    if (Number(id) === element.id) {
      userId = element.userId;
      titulo = element.title;
      body = element.body;
    }
  });
  users?.map((element) => {
    if (element.id === userId) {
      userName = element.name;
      email = element.email;
    }
  });
  const commentsControl = teste?.map((element) => {
      return (
        <Comments
          key={element.id}
          name={element.name}
          email={element.email}
          comment={element.body}
        />
      );
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
              <Cards id={id} body={body} title={titulo} link={false} comments={[comments]} >
                <Users name={userName} email={email} />
              </Cards>
              
              {/* divisor área de commentarios */}

              <div style={{ marginTop: "40px", marginLeft: '40px', fontSize: '16px' }}>
                <Texts>
                    Comments bellow
                </Texts>
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
