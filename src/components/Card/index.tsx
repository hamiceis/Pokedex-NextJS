import Image from "next/image";
import Link from "next/link";

import styles from '@/styles/Card.module.css'

type PokemonProps = {
  pokemon: {
    id: number;
    name: string;
    url: string;
  };
};

export const pokemonUrl = (id: number | string) => {
  const paddedId = id.toString().padStart(3, '0');
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png`;
};

export default function Card({ pokemon }: PokemonProps) {
  return (
    <div className={styles.card}>
      <Image
        src={pokemonUrl(pokemon.id)}
        width={120}
        height={120}
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`} legacyBehavior>
        <a className={styles.btn}>Detalhes</a>
      </Link>
    </div>
  );
}
