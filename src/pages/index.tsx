import Card from '@/components/Card';
import styles from '@/styles/Home.module.css'
import { GetStaticProps } from "next";
import Image from 'next/image'

interface PokemonsProps {
  id: number;
  name: string;
  url: string;
}

interface DataPokemons {
  pokemons: PokemonsProps[];
}

export default function Home({ pokemons }: DataPokemons) {
  return (
    <>
    <div>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src="/images/pokeball.png" width="50" height="50" alt="pokeball logo"/>
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon: PokemonsProps) => (
          <Card pokemon={pokemon} key={pokemon.id}/>
        ))}
      </div>
    </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //adicionando Id's no Array de Objeto pokemons
  data.results?.forEach((item: PokemonsProps, index: number) => {
    item.id = index + 1;
  });

  //outras abordagens
  // const pokemonsData = data.results.map((item: PokemonsProps, index: number) => {
  //   return ({...item, id: index + 1})
  // })

  // const pokeData = data.results.reduce((acc, pokemon, index) => {
  //   acc.push({...pokemon, id: index + 1})
  // }, [])

  return {
    props: {
      pokemons: data.results,
    },
  };
};
