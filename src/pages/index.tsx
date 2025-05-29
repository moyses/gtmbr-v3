import { GtmbrAasSection } from '@/components/gtmbr-aas-section';
import { HeroSection } from '@/components/hero-section';
import { LaunchFailSection } from '@/components/launch-fail-section';
import { TrustedCompanies } from '@/components/trusted-companies';
import { WhyGtmbrSection } from '@/components/why-gtmbr-section';
import { FeatureGTMSection } from '@/components/feature-gtm-section';

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
