import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
background-color: white;
`;

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
min-width: 250px;
padding: 20px;
margin: 10px;
border-radius: 6px;
max-width: 400px;
box-shadow: 0px 4px 8px -3px rgba(0,0,0,0.75);
`;

const CardTitle = styled.h1`
font-family: sans-serif;
font-weight: bolder;
font-size: 20px;
margin: 0;
`;

const CardBody = styled.h3`
font-family: sans-serif;
font-weight: lighter;
font-size: 16px;
margin: 10px;
color:${props=>props.secondary ? 'grey' : 'black' };
`;

const Button = styled.button`
    font-size: 16px;
    font-weight: ${props => props.paginate ? 'lighter' : 'bolder'};
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 3px;
    &:hover {
        background-color: ${props=> props.paginate ? '#9448BC' : '#FF99C8' };
        border: none;
        color: white;
    }
background-color: ${props=> props.paginate ? 'white' : '#9448BC' };
color: ${props=> props.paginate ? '#9448BC' : 'white' };
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.primary ? 'white' : 'black'};
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: ${props => props.primary ? 'white' : 'black'};
    }

`;

const SocialMedias = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
`;

const AppBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
position: static;
    background-color: #9448BC;
    padding: 15px;
    color: white;
    width: 100%;
`;

const NavTitle = styled.h1`
font-size: 16px;
font-weight: lighter;
font-family: sans-serif;
`;

export { Div, Card, CardTitle, CardBody, Button, StyledLink, SocialMedias, AppBar, NavTitle }