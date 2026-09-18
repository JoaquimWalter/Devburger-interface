import styled from "styled-components";
import BannerHamburger from '../../assets/banner-home.svg'
import Background from "../../assets/padrao-1.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: #f0f0f0;

background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ) ,
    url('${Background}');
    height: auto;
`

export const Banner = styled.div`
display: flex;
align-items: center;
height: 480px;
width: 100%;
justify-content: center;
position: relative;

background-image: url('${BannerHamburger}') ;
background-color: #1f1f1f;
background-position: center;
background-size: cover;

h1{
    font-family: 'Road Rage', sans-serif;
    font-size:80px;
    line-height: 65px;
    color: #fff;
    position: absolute;

    right:20%;
    top: 30%;

    span{
        display: block;
        font-size: 20px;
        color: #fff;
        font-weight: 400;
    }

}
`

export const CategoryMenu = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;
margin-top: 30px;
`

export const CategoryButton = styled(Link)`
text-decoration: none;
cursor: pointer;
background: none;
border: none;
color: ${(props) => props.$isActiveCategory ? '#9758a6' : '#333'};
font-size: 24px;
font-weight: 600;
padding-bottom: 5px;
line-height: 30px;
border-bottom: ${(props) => props.$isActiveCategory ? '3px solid #9758a6' : 'none'};
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto;
`