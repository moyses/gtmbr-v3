import { GtmbrAasSection } from '@/components/home-sections/gtmbr-aas-section';
import { HeroSection } from '@/components/home-sections/hero-section';
import { LaunchFailSection } from '@/components/home-sections/launch-fail-section';
import { TrustedCompanies } from '@/components/home-sections/trusted-companies';
import { WhyGtmbrSection } from '@/components/home-sections/why-gtmbr-section';
import { FeatureGTMSection } from '@/components/home-sections/feature-gtm-section';

export default function Home() {
  return (
    <>
      <article>
        <HeroSection />
        <TrustedCompanies />
        <LaunchFailSection />
        <FeatureGTMSection />
        <GtmbrAasSection />
        <WhyGtmbrSection />
      </article>
    </>
  );
}
