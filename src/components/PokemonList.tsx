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
      <li key={pokemon.pokedexNumber}>
        <PokemonCard pokemon={pokemon} />
      </li>
    ))}
  </ul>
);

const StyledPokemonList = styled(PokemonList)`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 1.875rem;
`;
