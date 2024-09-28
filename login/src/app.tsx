import { Container, Title, Input, Button } from "./style";

interface LoginProps {
  setName: (name: string) => void;
  loginSubmit: () => void;
}

export function App({ setName, loginSubmit }: LoginProps) {
  return (
    <Container>
      <Title>Olá, seja bem-vindo!</Title>
      <Input
        type="text"
        name="name"
        onChange={(event) => setName(event.target.value)}
        placeholder="Digite o seu nome:"
      />
      <Button type="button" onClick={loginSubmit}>
        Entrar
      </Button>
    </Container>
  );
}
