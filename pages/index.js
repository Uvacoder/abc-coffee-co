import styles from '../styles/Home.module.scss'
import Hero from '../components/Home/Hero'
import Collection from '../components/Home/Collection'
import WhyChoose from '../components/Home/WhyChoose'

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Collection />
      <WhyChoose />
    </div>
  )
}
