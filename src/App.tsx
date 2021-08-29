import styled from "styled-components";
import { PokemonList } from "components/PokemonList";
import { PokemonType } from "types/PokemonType";
import bulbassaur from "img/bulbassaur.png";

export { StyledApp as App };

const pokemons = [
  {
    pokedexNumber: 1,
    name: "bulbassaur",
    types: [PokemonType.Grass, PokemonType.Poison],
    image: bulbassaur,
  },
];

type AppProps = {
  className?: string;
};

const App = ({ className }: AppProps) => {
  return (
    <Container className={className}>
      <header>
        <Title>Pokédex</Title>
      </header>
      <main>
        <PokemonList pokemons={pokemons} />
      </main>
    </Container>
  );
};

const StyledApp = styled(App)`
  ${PokemonList} {
    margin-top: 2.8125rem;
  }
`;

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
