import styled from "styled-components";

const handlepokemonTypeType = (pokemonType) => {
  switch (pokemonType) {
    case "grass":
      return "#B5EAAF";
    case "fire":
      return "#FFC8A9";
    case "water":
      return "#AFD9FF";
    case "bug":
      return "#D4DFA7";
    case "normal":
      return "#E4E0CF";
    case "poison":
      return "#E6C2EF";
    case "electric":
      return "#FFE9A7";
    case "ground":
      return "#ECD8B4";
    case "fairy":
      return "#FFDDFF";
    case "fighting":
      return "#E7BDB8";
    case "psychic":
      return "#FFCBDE";
    case "rock":
      return "ECD8B4";
    case "ghost":
      return "CBC1E8";
    default:
      return "#fff";
  }
};

export const Container = styled.div`
  width: 100%;
  border-radius: 1.25rem;
  background-color: ${({ pokemonType }) => handlepokemonTypeType(pokemonType)};
  min-height: 260px;
  border: 1px solid #444c56;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem;
  height: auto;

  &:hover {
    filter: brightness(90%);
    cursor: pointer;
  }
`;

export const PokemonImage = styled.img`
  width: 100%;
  max-width: 150px;
  height: 100%;
  max-height: 150px;
  margin: 0 auto;
  object-fit: cover;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const PokemonID = styled.p`
  margin: 0;
`;

export const PokemonName = styled.p`
  margin: 0;
  font-weight: bold;
  text-transform: capitalize;
`;

export const TypesWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
