import styled from "styled-components";
import { Badge } from "components/Badge";
import bulbassaur from "./bulbassaur.png";

type PokemonListProps = {
  className?: string;
};

const PokemonList = ({ className }: PokemonListProps) => (
  <ul className={className}>
    <Item>
      <Info>
        <Number>#001</Number>
        <Name>Bulbassaur</Name>
        <BadgeGroup>
          <Badge type="grass" />
          <Badge type="poison" />
        </BadgeGroup>
      </Info>
      <Img src={bulbassaur} alt="" />
    </Item>
  </ul>
);

const StyledPokemonList = styled(PokemonList)`
  list-style-type: none;
  background: ${(props) => props.theme.colors.background.type.grass};
  border-radius: 10px;
`;

const Item = styled.li`
  position: relative;
  padding: 1.25rem;
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
  top: -25px;
`;

export { StyledPokemonList as PokemonList };
