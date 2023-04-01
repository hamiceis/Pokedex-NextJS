import styles from '@/styles/About.module.css'
import Image from 'next/image'

export default function About(){
  return (
   <div className={styles.about}>
     <h1>Bem-vindo à Pokedex</h1>
    <p>Sua página Pokedex é uma fonte de informações completa e detalhada sobre todos os tipos de Pokémon existentes. Aqui você pode encontrar tudo o que precisa saber sobre cada Pokémon, desde seu nome e número de identificação até sua aparência, habilidades, fraquezas, evolução e muito mais.</p>

    <p>Então, se você é um amante de Pokémon em busca de informações detalhadas e precisas sobre essas criaturas fascinantes, ou simplesmente quer se conectar com outros fãs da franquia, a sua página Pokedex é o lugar perfeito para estar.
    </p>
    <Image src="/images/charizard.png" width={300} height={300} alt="charizard" />
   </div>
  )
}