import React from "react";
import { Button } from "./styles";
const Footer = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      {localStorage.getItem("pageComment") ? (
        <>
          <nav style={{ textAlign: "center", margin: "20px 0px" }}>
            {pageNumbers.map((element) => {
              if (element === Number(localStorage.getItem("pageComment"))) {
                return (
                  <Button
                    key={element}
                    value={element}
                    onClick={() => paginate(element)}
                  >
                    {element}
                  </Button>
                );
              }
              return (
                <Button
                  paginate
                  primary
                  key={element}
                  onClick={() => paginate(element)}
                >
                  {element}
                </Button>
              );
            })}
          </nav>
        </>
      ) : (
        <>
          <nav style={{ textAlign: "center", margin: "20px 0px" }}>
            {pageNumbers.map((element) => {
              if (element === Number(localStorage.getItem("postpage"))) {
                return (
                  <Button key={element} onClick={() => paginate(element)}>
                    {element}
                  </Button>
                );
              }
              return (
                <Button
                  paginate
                  primary
                  key={element}
                  onClick={() => paginate(element)}
                >
                  {element}
                </Button>
              );
            })}
          </nav>
        </>
      )}
    </>
  );
};
export default Footer;
