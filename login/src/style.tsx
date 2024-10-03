import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;

  @media screen and (min-width: 1200px) {
    padding: 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  line-height: 38.73px;
`;

export const Input = styled.input`
  max-width: 350px;
  width: 100%;
  height: 60px;
  padding: 16px 20px;
  border-radius: 4px;
  border: 2px solid #d9d9d9;
  font-size: 24px;
  line-height: 29.05px;
  color: #aaaaaa;

  &::placeholder {
    font-size: 24px;
    line-height: 29.05px;
    color: #aaaaaa;
  }

  @media screen and (min-width: 1200px) {
    max-width: 521px;
  }
`;

export const Button = styled.button`
  max-width: 350px;
  width: 100%;
  height: 60px;
  padding: 15px;
  border: 0;
  border-radius: 4px;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 29.05px;
  color: #ffffff;
  background-color: #ec6724;

  @media screen and (min-width: 1200px) {
    max-width: 521px;
  }
`;
