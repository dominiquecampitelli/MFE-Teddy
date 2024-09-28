import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1200px) {
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 38.73px;
  color: #000000;
`;

export const Input = styled.input`
  width: 350px;
  height: 60px;
  padding: 16px 20px;
  border-radius: 4px;
  border: 2px solid #d9d9d9;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 29.05px;
  color: #aaaaaa;

  &::placeholder {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 29.05px;
    color: #aaaaaa;
  }

  @media screen and (min-width: 1200px) {
    width: 521px;
  }
`;

export const Button = styled.button`
  width: 350px;
  height: 60px;
  padding: 15px;
  border: 0;
  border-radius: 4px;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29.05px;
  color: #ffffff;
  background-color: #ec6724;

  @media screen and (min-width: 1200px) {
    width: 521px;
  }
`;
