import "styled-components";
import { PokemonType } from "types/PokemonType";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      type: Record<PokemonType, string>;
      background: {
        type: Record<PokemonType, string>;
      };
      text: {
        white: string;
        black: string;
        grey: string;
        number: string;
      };
    };
  }
}
