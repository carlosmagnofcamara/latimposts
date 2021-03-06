import React, { useCallback, useEffect, useState } from "react";
import UserService from "../../services/users";
import PostService from "../../services/posts";
import Posts from "./Posts";
import Footer from "../Footer";
import Loader from "../Loader";
import Header from "../Header";
import CommentsService from "../../services/comments";
import { Div } from '../styles';

const Content = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("postpage") || 1
  );
  const [postsPerPage] = useState(10);

  const getDatas = useCallback(async () => {
    const dataUsers = await UserService.getUsers();
    const dataPosts = await PostService.getPosts();
    const dataComments = await CommentsService.getComments();
    setUsers(dataUsers.data);
    setPosts(dataPosts.data);
    setComments(dataComments.data);
    setLoader(false);
  }, []);

  useEffect(() => {
    getDatas();
  }, [getDatas]);

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPost = posts.slice(firstPost, lastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    localStorage.setItem('postpage', pageNumber); //te mantém na mesma pagina após reload
    window.scrollTo(0, 0)
  };

  const postsControl = currentPost.map((element) => {
    return (
      <Posts
        key={element.id}
        id={element.id}
        post={element}
        title={element.title}
        body={element.body}
        users={users}
        comments={comments}
      />
    );
  });

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
        <Header titulo="Welcome to LatimPosts" bool={false} />
          <Div>
          {postsControl}
          </Div>

          <Footer
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </>
      )}
    </>
  );
};
export default Content;
