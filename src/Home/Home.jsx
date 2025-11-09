import CTA from "../Component/CTA"
import HeroSlider from "../Component/HeroSlider"
import Latest from "../Component/Latest"
import Testimonial from "../Component/Testimonial"
import WhyChoiceUs from "../Component/WhyChoiceUs"
import Footer from "../Layout/Footer"

const latestData = fetch('http://localhost:3000/latest-services')
.then(res=>res.json())
const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <Latest latestData={latestData} />
      <WhyChoiceUs/>
      <Testimonial/>
      <CTA/>
    </div>
  )
}

export default Home