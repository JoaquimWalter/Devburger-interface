import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: grab;
    margin-bottom: 40px;
    position: relative;

    div {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 5px;

        p {
            font-size: 18px;
            color:#ff8c05;
            line-height: 20px;
            font-weight: 700;
            margin-top:40px;
        }

        strong {
            font-size: 22px;
            color: #363636;
            font-weight: 800;
            line-height: 20px;

        }
    }

`
export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top: -50px;
`
