import { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";

import { PaginationItem } from "./components/pagination-item";

import LogoTeddy from "./assets/logo-teddy.svg";
import Hamburger from "./assets/hamburger-icon.svg";
import AddIcon from "./assets/add-icon.svg";
import EditIcon from "./assets/edit-icon.svg";
import DeleteIcon from "./assets/delete-icon.svg";

import {
  Container,
  Nav,
  Logo,
  MenuMobile,
  ListMobile,
  MenuBurger,
  MenuDesktop,
  ListDesktop,
  UserMessage,
  Content,
  FilterTotal,
  TotalDescription,
  TotalOption,
  TotalTitle,
  CardContent,
  Card,
  Title,
  Subtitle,
  CardOptions,
  Options,
  Button,
  Filter,
} from "./feed-style";

type DataClients = {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
  updatedAt: string;
  createdAt: string;
};

type ApiResponse = {
  clients: DataClients[];
  currentPage: number;
  totalPages: number;
};

export function Feed() {
  const [active, setActive] = useState(false);
  const [data, setData] = useState<ApiResponse | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const options = [{ value: "0", label: "0" }];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cors-anywhere.herokuapp.com/boasorte.teddybackoffice.com.br/users"
        );
        setData(response.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function handleChangePage(page: number) {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://cors-anywhere.herokuapp.com/boasorte.teddybackoffice.com.br/users?page=${page}`
        );
        setData(response.data);
        setCurrentPage(response.data.currentPage);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }

  return (
    <Container>
      <Nav open={active}>
        <Logo>
          <img src={LogoTeddy} alt="Teddy" />
        </Logo>
        <MenuDesktop>
          <ListDesktop>Clientes</ListDesktop>
          <ListDesktop>Clientes selecionados</ListDesktop>
          <ListDesktop>Sair</ListDesktop>
        </MenuDesktop>
        <UserMessage>
          Olá, <span>Usuário!</span>
        </UserMessage>
        <MenuBurger onClick={() => setActive(!active)}>
          <img src={Hamburger} alt="Nav" />
        </MenuBurger>
        <MenuMobile open={active}>
          <ListMobile>Clientes</ListMobile>
          <ListMobile>Clientes selecionados</ListMobile>
          <ListMobile>Sair</ListMobile>
          <UserMessage>
            Olá, <span>Usuário!</span>
          </UserMessage>
        </MenuMobile>
      </Nav>

      <Content>
        <FilterTotal>
          <TotalDescription>
            <span>{data?.clients.length}</span> clientes encontrados:
          </TotalDescription>
          <TotalOption>
            <TotalTitle>Clientes por página:</TotalTitle>
            <Select options={options} />
          </TotalOption>
        </FilterTotal>

        <CardContent>
          {data?.clients.map((client) => (
            <Card key={client.id}>
              <Title>{client.name}</Title>
              <Subtitle>Salário: R${client.salary.toFixed(2)}</Subtitle>
              <Subtitle>
                Empresa: R${client.companyValuation.toFixed(2)}
              </Subtitle>
              <CardOptions>
                <Options type="button">
                  <img src={AddIcon} alt="Add" />
                </Options>
                <Options type="button">
                  <img src={EditIcon} alt="Edit" />
                </Options>
                <Options type="button">
                  <img src={DeleteIcon} alt="Delete" />
                </Options>
              </CardOptions>
            </Card>
          ))}
        </CardContent>

        <Button type="button">Criar cliente</Button>

        <Filter>
          {currentPage <= 1 ? (
            <>
              <PaginationItem
                num={currentPage}
                active
                handleChangePage={handleChangePage}
              />
              <PaginationItem
                num={currentPage + 1}
                active={false}
                handleChangePage={handleChangePage}
              />
              <PaginationItem
                num={totalPages}
                active={false}
                handleChangePage={handleChangePage}
              />
            </>
          ) : currentPage == totalPages ? (
            <>
              <PaginationItem
                num={1}
                active={false}
                handleChangePage={handleChangePage}
              />
              <PaginationItem
                num={currentPage - 1}
                active={false}
                handleChangePage={handleChangePage}
              />
              <PaginationItem
                num={currentPage}
                active
                handleChangePage={handleChangePage}
              />
            </>
          ) : (
            <>
              <PaginationItem
                num={1}
                active={false}
                handleChangePage={handleChangePage}
              />
              <PaginationItem
                num={currentPage - 1}
                active={false}
                handleChangePage={handleChangePage}
              />
              <PaginationItem
                num={currentPage}
                active
                handleChangePage={handleChangePage}
              />
              <PaginationItem
                num={currentPage + 1}
                active={false}
                handleChangePage={handleChangePage}
              />
              <PaginationItem
                num={totalPages}
                active={false}
                handleChangePage={handleChangePage}
              />
            </>
          )}
        </Filter>
      </Content>
    </Container>
  );
}
