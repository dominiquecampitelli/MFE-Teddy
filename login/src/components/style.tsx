import styled from "styled-components";

interface PageItemButton {
  active: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button<PageItemButton>`
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? "#ec6724" : "#ffffff00")};
  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
  font-weight: 700;
  font-size: 14px;
  line-height: 16.94px;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16.94px;
`;
