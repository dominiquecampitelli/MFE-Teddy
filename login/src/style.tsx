import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 38.73px;
  color: #000000;
`;

export const Input = styled.input`
  max-width: 350px;
  width: 100%;
  border-radius: 4px;
  border: 2px solid #d9d9d9;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 29.05px;
  color: #aaaaaa;
`;

export const Button = styled.button`
  max-width: 350px;
  width: 100%;
  border-radius: 4px;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29.05px;
  color: #ffffff;
  background-color: #ec6724;
`;
