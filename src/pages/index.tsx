import { NextPage } from 'next'
import Layout from '../components/common/Layout'
import HeroBlock from '../components/Home/HeroBlock'
import ServiceBlock from '../components/Home/ServiceBlock'
import CTABlock from '../components/Home/CTA'
import Founder from '../components/Home/Founder'
import Recomend from '../components/Home/Recomend'

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
          <HeroBlock/>
          <ServiceBlock/>
          <CTABlock/>
          <Founder/>
          <Recomend/>
      </Layout>
    </div>
  )
}

export default Home
