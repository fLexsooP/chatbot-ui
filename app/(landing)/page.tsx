import { LandingContent } from '@/components/landing-content';
import { LandingHero } from '@/components/landing-hero';
import { LandingNavbar } from '@/components/landing-navbar';

const LandingPage = () => {
  return (
    <div>
      <div>
        <LandingNavbar />
        <LandingHero />
        <LandingContent />
      </div>
    </div>
  );
};

export default LandingPage;
