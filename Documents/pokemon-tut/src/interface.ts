export interface typeOf {
  name: string;
  url: string;
}

export interface moreOf {
    name: string;
    id: number;
    sprites: {
      front_default: string;
    };
  }

export interface Detail {
  id: number;
  isOpen: boolean;
}

export interface PokemonDetail extends moreOf {
  abilities?: {
    ability: string;
    name: string;
  }[];
}