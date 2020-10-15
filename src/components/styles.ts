import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props{
    primary: boolean;
    secondary: boolean;
    paginate: boolean;
}

export const Div = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
background-color: white;
`;

export const Card = styled.div`
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

export const CardTitle = styled.h1`
font-family: sans-serif;
font-weight: bolder;
font-size: 20px;
margin: 0;
`;

export const CardBody = styled.h3<Props>`
font-family: sans-serif;
font-weight: lighter;
font-size: 16px;
margin: 10px;
color:${(props: any) => props.secondary ? 'grey' : 'black' };
`;

export const Button = styled.button<Props>`
    font-size: 16px;
    font-weight: ${(props: any) => props.paginate ? 'lighter' : 'bolder'};
    padding: 10px 15px;
    outline: none;
    margin: 3px 3px;
    border: none;
    border-radius: 3px;
    &:hover {
        background-color: ${(props: any) => props.paginate ? '#9448BC' : '#FF99C8' };
        border: none;
        color: white;
    }
background-color: ${(props: any) => props.paginate ? 'white' : '#9448BC' };
color: ${(props: any)=> props.paginate ? '#9448BC' : 'white' };
`;

export const StyledLink = styled(Link)<Props>`
    text-decoration: none;
    color: ${(props: any) => props.primary ? 'white' : 'black'};
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: ${(props: any) => props.primary ? 'white' : 'black'};
    }
`;

export const SocialMedias = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
`;

export const AppBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
position: static;
    background-color: #9448BC;
    padding: 15px;
    color: white;
    width: 100%;
`;

export const NavTitle = styled.h1`
font-size: 16px;
font-weight: lighter;
font-family: sans-serif;
`;

export const Pagination = styled.nav`
width: 100%;
text-align: center;
margin: auto;
`;

