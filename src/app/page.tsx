import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { TrustedCompanies } from '@/components/sections/trusted-companies';
import { LaunchFailSection } from '@/components/sections/launch-fail-section';
import { FeatureGTMSection } from '@/components/sections/feature-gtm-section';
import { GtmbrAasSection } from '@/components/sections/gtmbr-aas-section';
import { WhyGtmbrSection } from '@/components/sections/why-gtmbr-section';

export default function Home() {
  return (
    <>
      <Header />
      <article>
        <HeroSection />
        <TrustedCompanies />
        <LaunchFailSection />
        <FeatureGTMSection />
        <GtmbrAasSection />
        <WhyGtmbrSection />
      </article>
      <Footer />
    </>
  );
}
