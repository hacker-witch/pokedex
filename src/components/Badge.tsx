import styled from "styled-components";
import { ReactComponent as GrassIcon } from "img/grass-icon.svg";
import { ReactComponent as PoisonIcon } from "img/poison-icon.svg";

export { StyledBadge as Badge };

type BadgeProps = {
  className?: string;
  type: "grass" | "poison";
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
  type: "grass" | "poison";
};

const Icon = ({ type }: IconProps) => {
  const styles = {
    width: "0.9375rem",
    height: "0.9375rem",
  };

  switch (type) {
    case "grass":
      return <GrassIcon {...styles} />;
    case "poison":
      return <PoisonIcon {...styles} />;
  }
};
