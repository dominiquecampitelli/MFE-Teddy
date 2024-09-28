import { Container, Title, Input, Button } from "./style";

export function App() {
  return (
    <Container>
      <Title>Olá, seja bem-vindo!</Title>
      <Input type="text" name="name" placeholder="Digite o seu nome:" />
      <Button type="submit">Entrar</Button>
    </Container>
  );
}
