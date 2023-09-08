
import CTASection from '@/Components/Homepage/CTASection/CTASection'
import CoursesSection from '@/Components/Homepage/CoursesSection/CoursesSection'
import FAQSection from '@/Components/Homepage/FAQSection/FAQSection'
import HeroSection from '@/Components/Homepage/HeroSection/HeroSection'
import PricingSection from '@/Components/Homepage/PricingSection/PricingSection'
import TestimonialSection from '@/Components/Homepage/TestimonialSection/TestimonialSection'
import ValueSection from '@/Components/Homepage/ValueSection/ValueSection'

export default function Home() {
  return (
    <main className='flex flex-col'>
      <HeroSection />
      <ValueSection />
      <CoursesSection />
      <TestimonialSection />
      <PricingSection />
      <CTASection />
      <FAQSection />
    </main>
  )
}
