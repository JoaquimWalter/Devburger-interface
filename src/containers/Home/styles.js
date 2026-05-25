import styled from "styled-components";

import Background from "../../assets/padrao-1.svg";
import BannerHome from "../../assets/banner-home.svg";


export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 400px;

    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        color: #fff;
        position: absolute;
        right: 20%;
        top:10%;
    }
`

export const Container = styled.section`
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ) ,
    url('${Background}');
    height: auto;
`;

export const Content = styled.div``;



