import styled from "styled-components";
import { PokemonCard } from "components/PokemonCard";

type PokemonListProps = {
  className?: string;
};

const PokemonList = ({ className }: PokemonListProps) => (
  <ul className={className}>
    <Item>
      <PokemonCard />
    </Item>
  </ul>
);

const StyledPokemonList = styled(PokemonList)`
  list-style-type: none;
`;

const Item = styled.li`
  max-width: 20.875rem;
`;

export { StyledPokemonList as PokemonList };
