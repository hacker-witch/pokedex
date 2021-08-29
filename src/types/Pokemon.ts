import { PokemonType } from "types/PokemonType";

export type Pokemon = {
  pokedexNumber: number;
  name: string;
  types: PokemonType[];
  image: string;
};
