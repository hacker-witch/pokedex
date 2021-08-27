import { PokemonList } from "components/PokemonList";
import styled from "styled-components";

export const App = () => {
  return (
    <>
      <Title>Pokédex</Title>
      <PokemonList />
    </>
  );
};

const Title = styled.h1`
  margin-top: 2.1875rem;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text.black};
`;
