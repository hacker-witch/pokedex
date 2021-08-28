import styled from "styled-components";
import { Badge } from "components/Badge";
import { PokemonType } from "types/PokemonType";
import bulbassaur from "./bulbassaur.png";
import pattern from "img/pattern.svg";
import pokeball from "img/pokeball.svg";

type PokemonListProps = {
  className?: string;
};

const PokemonList = ({ className }: PokemonListProps) => (
  <ul className={className}>
    <PokemonCard>
      <Info>
        <Number>#001</Number>
        <Name>Bulbassaur</Name>
        <BadgeGroup>
          <Badge type={PokemonType.Grass} />
          <Badge type={PokemonType.Poison} />
        </BadgeGroup>
      </Info>
      <Img src={bulbassaur} alt="" />
    </PokemonCard>
  </ul>
);

const StyledPokemonList = styled(PokemonList)`
  list-style-type: none;
  background: ${(props) =>
    props.theme.colors.background.type[PokemonType.Grass]};
  border-radius: 10px;
`;

const PokemonCard = styled.li`
  position: relative;
  padding: 1.25rem;
  background-image: url(${pattern}), url(${pokeball});
  background-repeat: no-repeat;
  background-size: 4.625rem 2rem, 9.0625rem;
  background-position: 5.625rem 0.3125rem, right -0.9375rem center;
`;

const Info = styled.div`
  ${Badge} + ${Badge} {
    margin-left: 0.3125rem;
  }
`;

const Number = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text.number};
`;

const Name = styled.h2`
  font-size: 1.625rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text.white};
`;

const BadgeGroup = styled.div`
  margin-top: 0.3125rem;
`;

const Img = styled.img`
  width: 8.125rem;
  height: 8.125rem;
  position: absolute;
  right: 0;
  top: -1.5625rem;
`;

export { StyledPokemonList as PokemonList };
