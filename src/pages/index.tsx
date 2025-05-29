import { HeroSection } from '@/components/hero-section';
import { LaunchFailSection } from '@/components/launch-fail-section';
import { TrustedCompanies } from '@/components/trusted-companies';

export default function Home() {
  return (
    <>
      <article>
        <HeroSection />
        <TrustedCompanies />
        <LaunchFailSection />
      </article>
    </>
  );
}
