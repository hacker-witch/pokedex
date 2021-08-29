import styled from "styled-components";
import { PokemonCard } from "components/PokemonCard";
import { PokemonType } from "types/PokemonType";
import bulbassaur from "./bulbassaur.png";

export { StyledPokemonList as PokemonList };

type PokemonListProps = {
  className?: string;
};

const PokemonList = ({ className }: PokemonListProps) => (
  <ul className={className}>
    <Item>
      <PokemonCard
        pokedexNumber={1}
        name="bulbassaur"
        types={[PokemonType.Grass, PokemonType.Poison]}
        image={bulbassaur}
      />
    </Item>
  </ul>
);

const StyledPokemonList = styled(PokemonList)`
  list-style-type: none;
`;

const Item = styled.li`
  max-width: 20.875rem;
`;
