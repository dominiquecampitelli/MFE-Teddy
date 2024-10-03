import styled from "styled-components";

interface NavProps {
  open: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;

export const Nav = styled.nav<NavProps>`
  width: 100%;
  height: ${(props) => (props.open ? "100vh" : "70px")};
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;

  @media screen and (min-width: 1200px) {
    height: 100px;
    padding: 0 120px;
  }
`;

export const Logo = styled.div`
  width: 70px;
  height: 34.29px;

  > img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1200px) {
    width: 100px;
    height: 48.98px;
  }
`;

export const MenuMobile = styled.ul<NavProps>`
  height: 100%;
  margin-top: 30px;
  gap: 33px;
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
`;

export const ListMobile = styled.li`
  font-size: 14px;
  line-height: 16.94px;

  &::active {
    color: #ec6724;
    text-decoration: underline;
  }
`;

export const MenuBurger = styled.div`
  width: 24px;
  height: 20px;
  display: block;
  border: none;
  background: transparent;

  > img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const MenuDesktop = styled.ul`
  gap: 33px;
  display: none;
  flex-direction: row;
  align-items: center;

  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const ListDesktop = styled.li`
  &::active {
    color: #ec6724;
    text-decoration: underline;
  }
`;

export const UserMessage = styled.p`
  display: none;

  > span {
    font-weight: 700;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-self: center;

  @media screen and (min-width: 1200px) {
    padding: 30px 120px;
  }
`;

export const FilterTotal = styled.div`
  width: 100%;
  margin-bottom: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1200px) {
    margin-bottom: 10px;
    gap: 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TotalDescription = styled.p`
  font-size: 18px;
  line-height: 21.78px;

  > span {
    font-weight: 700;
  }
`;

export const TotalOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const TotalTitle = styled.div`
  font-size: 18px;
  line-height: 21.78px;
`;

export const CardContent = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  max-width: 350px;
  width: 100%;
  height: 138px;
  padding: 15px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 #0000001a;
  background-color: #ffffff;

  @media screen and (min-width: 1200px) {
    max-width: 285px;
  }
`;

export const Title = styled.p`
  font-weight: 700;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 16.94px;
`;

export const CardOptions = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Options = styled.button`
  max-width: 20px;
  max-height: 20px;
  border: none;
  background-color: #ffffff00;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: 2px solid #ec6724;
  border-radius: 4px;
  background-color: #ffffff00;
  color: #ec6724;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.94px;
`;

export const Filter = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
