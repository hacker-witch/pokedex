import { PokemonList } from "components/PokemonList";
import styled from "styled-components";

export const App = () => {
  return (
    <Container>
      <Title>Pokédex</Title>
      <PokemonList />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 1rem;

  @media (min-width: 23.4375rem) {
    padding: 0 2.5rem;
  }
`;

const Title = styled.h1`
  margin-top: 2.1875rem;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text.black};
`;
