import styles from '@/styles/Error.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound(){
  return (
    <div className={styles.container}>
      <h1>Página não encontrada!</h1>
      <Image src="/images/poke_defeated.png" width="400" height="400" alt="pikachu defeated"/>
      <Link href={'/'}>
        Voltar para o início!
      </Link>
    </div>
   
  )
}