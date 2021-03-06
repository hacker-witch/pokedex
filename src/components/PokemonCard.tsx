import styled from "styled-components";
import { Badge } from "components/Badge";
import { Pokemon } from "types/Pokemon";
import pattern from "img/pattern.svg";
import pokeball from "img/pokeball.svg";

export { StyledPokemonCard as PokemonCard };

type PokemonCardProps = {
  className?: string;
  pokemon: Pokemon;
};

const PokemonCard = ({ className, pokemon }: PokemonCardProps) => (
  <div className={className}>
    <Info>
      <Number>{"#" + pokemon.pokedexNumber.toString().padStart(3, "0")}</Number>
      <Name>{pokemon.name.toLowerCase()}</Name>
      <BadgeGroup>
        {pokemon.types.map((type) => (
          <Badge key={type} type={type} />
        ))}
      </BadgeGroup>
    </Info>
    <Img src={pokemon.image} alt="" />
  </div>
);

const StyledPokemonCard = styled(PokemonCard)`
  position: relative;
  padding: 1.25rem;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.background.type[props.pokemon.types[0]]};
  background-image: url(${pattern}), url(${pokeball});
  background-repeat: no-repeat;
  background-size: 4.625rem 2rem, 9.0625rem;
  background-position: 5.625rem 0.3125rem, right -0.9375rem center;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    width: 88%;
    height: 5.9375rem;
    box-shadow: 0 0.625rem 20px
      ${(props) => props.theme.colors.background.type[props.pokemon.types[0]]};
    opacity: 0.4;
  }
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
  text-transform: capitalize;
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
  right: 0.625rem;
  top: -1.5625rem;
`;
