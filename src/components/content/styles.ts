import styled from 'styled-components';

const TitleComments = styled.div`
background-color: white;
padding: 10px;
width: 100%;
font-family: sans-serif;
box-shadow: 0px 3px 8px -3px rgba(0,0,0,0.75);
`;

const BodyComments = styled.div`
background-color: #CDD1DE;
width: 100%;
padding: 10px;
font-family: sans-serif;
margin-bottom: 15px;
box-shadow: 0px 4px 8px -3px rgba(0,0,0,0.75);
`;

const Author = styled.h5`
font-size: 16px;
margin: 0;
font-weight: lighter;
font-family: sans-serif;
`;

export {TitleComments, BodyComments, Author };