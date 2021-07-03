import styles from '../styles/Home.module.scss'
import Hero from '../components/Home/Hero'
import Collection from '../components/Home/Collection'
import WhyChoose from '../components/Home/WhyChoose'
import HowItWorks from '../components/Home/HowItWorks'

export default function Home() {

  return (
    <div className={styles.container} >
      <Hero />
      <Collection />
      <WhyChoose />
      <HowItWorks />
    </div>
  )
}
