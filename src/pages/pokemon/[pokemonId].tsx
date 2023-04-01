import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Image from "next/image";
import { pokemonUrl } from "@/components/Card";
import styles from "@/styles/Pokemon.module.css";

interface PokemonProps {
  pokemon: {
    id: string;
    name: string;
    height: number;
    weight: number;
    types: Array<{
      type: { name: string };
    }>;
  };
}

interface Params extends ParsedUrlQuery {
  pokemonId: string;
}
export default function Pokemon({ pokemon }: PokemonProps) {
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        src={pokemonUrl(pokemon.id)}
        width={200}
        height={200}
        alt={pokemon.name}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>

      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item, index: number) => {
            return (
              <span
                key={index}
                className={`${styles.type} ${styles["type_" + item.type.name]}`}
              >
                {item.type?.name}
              </span>
            );
          })}
        </div>
      </div>

      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon?.height * 10} cm</p>
        </div>

        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemon?.weight / 10} Kg</p>
        </div>
      </div>
    </div>
  );
}

//params
export const getStaticPaths: GetStaticPaths = () => {
  const pokemonsIds = Array.from({ length: 251 }).fill("");
  const paths = pokemonsIds.map((_, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PokemonProps, Params> = async (
  context
) => {
  const { pokemonId } = context?.params!;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};
