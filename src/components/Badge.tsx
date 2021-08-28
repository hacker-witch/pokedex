import styled from "styled-components";
import { PokemonType } from "types/PokemonType";
import { ReactComponent as BugIcon } from "img/bug-icon.svg";
import { ReactComponent as DarkIcon } from "img/dark-icon.svg";
import { ReactComponent as DragonIcon } from "img/dragon-icon.svg";
import { ReactComponent as ElectricIcon } from "img/electric-icon.svg";
import { ReactComponent as FairyIcon } from "img/fairy-icon.svg";
import { ReactComponent as FightingIcon } from "img/fighting-icon.svg";
import { ReactComponent as FireIcon } from "img/fire-icon.svg";
import { ReactComponent as FlyingIcon } from "img/flying-icon.svg";
import { ReactComponent as GhostIcon } from "img/ghost-icon.svg";
import { ReactComponent as GrassIcon } from "img/grass-icon.svg";
import { ReactComponent as GroundIcon } from "img/ground-icon.svg";
import { ReactComponent as IceIcon } from "img/ice-icon.svg";
import { ReactComponent as NormalIcon } from "img/normal-icon.svg";
import { ReactComponent as PoisonIcon } from "img/poison-icon.svg";
import { ReactComponent as PsychicIcon } from "img/psychic-icon.svg";
import { ReactComponent as RockIcon } from "img/rock-icon.svg";
import { ReactComponent as SteelIcon } from "img/steel-icon.svg";
import { ReactComponent as WaterIcon } from "img/water-icon.svg";

export { StyledBadge as Badge };

type BadgeProps = {
  className?: string;
  type: PokemonType;
};

const Badge = ({ className, type }: BadgeProps) => (
  <div className={className}>
    <Icon type={type} /> {type}
  </div>
);

const StyledBadge = styled(Badge)`
  display: inline-grid;
  grid-template-columns: min-content min-content;
  gap: 0.3125rem;
  padding: 0.3125rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.white};
  background: ${(props) => props.theme.colors.type[props.type]};
  border-radius: 3px;

  svg path {
    fill: #fff;
  }
`;

type IconProps = {
  type: PokemonType;
};

const Icon = ({ type }: IconProps) => {
  const styles = {
    width: "0.9375rem",
    height: "0.9375rem",
  };

  switch (type) {
    case PokemonType.Bug:
      return <BugIcon {...styles} />;

    case PokemonType.Dark:
      return <DarkIcon {...styles} />;

    case PokemonType.Dragon:
      return <DragonIcon {...styles} />;

    case PokemonType.Electric:
      return <ElectricIcon {...styles} />;

    case PokemonType.Fairy:
      return <FairyIcon {...styles} />;

    case PokemonType.Fighting:
      return <FightingIcon {...styles} />;

    case PokemonType.Fire:
      return <FireIcon {...styles} />;

    case PokemonType.Flying:
      return <FlyingIcon {...styles} />;

    case PokemonType.Ghost:
      return <GhostIcon {...styles} />;

    case PokemonType.Grass:
      return <GrassIcon {...styles} />;

    case PokemonType.Ground:
      return <GroundIcon {...styles} />;

    case PokemonType.Ice:
      return <IceIcon {...styles} />;

    case PokemonType.Normal:
      return <NormalIcon {...styles} />;

    case PokemonType.Poison:
      return <PoisonIcon {...styles} />;

    case PokemonType.Psychic:
      return <PsychicIcon {...styles} />;

    case PokemonType.Rock:
      return <RockIcon {...styles} />;

    case PokemonType.Steel:
      return <SteelIcon {...styles} />;

    case PokemonType.Water:
      return <WaterIcon {...styles} />;
  }
};
