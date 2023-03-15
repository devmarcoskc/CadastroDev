import styled from "styled-components";

export const Container = styled.div`
    margin: 30px 0;
    cursor: pointer;

    a   {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;
export const InfoDiv = styled.div`
    flex:1;
    margin-right: 20px;
`;
export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #FFF;
`;
export const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #B8B8D4;
`;
export const IconArea = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #494A7C;
    display:flex;
    justify-content: center;
    align-items: center;
`;
export const Point = styled.div`
    width: 6px;
    height: 6px;
    border: 3px solid #494A7C;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: #02044A;
`
