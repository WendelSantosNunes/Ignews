import {GetServerSideProps} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../service/stripe'
import styles from './home.module.scss'

export default function Home(props) {
  return (
    <>
     <Head>
       <title>Home | ig.news</title>
     </Head>
     <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 hey, welcome</span>
          <h1>News about the <span>React</span> world</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.98 month</span>
          </p>
          <SubscribeButton/>
        </section>
        <Image src="/images/avatar.svg" alt="Girl coding" width="334px" height="520px" />
     </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async() => {
  const price = await stripe.prices.retrieve('price_1L6fWdJPbY812QUfgRUd6YGi',{
    expand: ['product']
  })
  
  return {
    props: {
      nome: 'Wendel'
    }
  }
}