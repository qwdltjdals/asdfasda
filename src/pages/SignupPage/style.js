import { css } from "@emotion/react";

export const mainLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 900px;
`;

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    padding: 50px;
    width: 700px;
    height: 900px;
    border: 3px solid #1C48E1;
    border-radius: 20px;
`;

export const headerLayout = css`
    font-size: 20px;

    & > h1 {
        margin-top: 0px;
        margin-bottom: 30px;
    }
`;

export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const inputUser = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    & input {
        margin-bottom: 10px;
        width: 450px;
        height: 50px;
        border: 1px solid #000000;
        border-radius: 10px;
        :nth-last-of-type(1) {
            margin-bottom: 0;
            
        }
    }
`;

export const inputPhone = css`
    box-sizing: border-box;
    display: flex;

    & input {
        margin-top: 30px;
        width: 380px;
        height: 50px;
        border: 1px solid #000000;
        border-right: hidden;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    & button {
        margin-top: 30px;
        background-color: #2A3389;
        border: 1px solid #000000;
        color: white;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

`;

export const joinOkButton = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    & > button {
        margin-top: 80px;
        width: 450px;
        height: 80px;
        background-color: #2A3389;
        border: 1px solid #000000;
        color: white;
        font-size: 35px;
        font-weight: 500;
        border-radius: 10px;
    }
`;
