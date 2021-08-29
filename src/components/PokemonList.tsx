import styled from "styled-components";
import { PokemonCard } from "components/PokemonCard";
import { Pokemon } from "types/Pokemon";

export { StyledPokemonList as PokemonList };

type PokemonListProps = {
  className?: string;
  pokemons: Pokemon[];
};

const PokemonList = ({ className, pokemons }: PokemonListProps) => (
  <ul className={className}>
    {pokemons.map((pokemon) => (
      <Item key={pokemon.pokedexNumber}>
        <PokemonCard pokemon={pokemon} />
      </Item>
    ))}
  </ul>
);

const StyledPokemonList = styled(PokemonList)`
  list-style-type: none;
`;

const Item = styled.li`
  max-width: 20.875rem;
`;
