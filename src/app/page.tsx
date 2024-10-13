import HyperHire from '@/components/molecules/hyperhire-logo';
import InfoTooltip from '@/components/molecules/info-tooltip';
import Navbar from '@/components/molecules/navbar';
import FieldsCarousel from '@/components/organisms/fields-carousel';
import SkillsGrid from '@/components/organisms/skills-grid';
import TalentsCarousel from '@/components/organisms/talents-carousel';
import ServiceGrid from '@/components/organisms/service-grid';
import Footer from '@/components/organisms/footer';
import Offers from '@/components/molecules/offers';
import NeedDeveloperBtn from '@/components/atoms/need-developer-bnt';
import { ReactNode } from 'react';

export default function Home({ talents }: { talents: ReactNode }) {
  return (
    <div className="container mx-auto flex flex-col md:gap-10 gap-2 p-4">
      <div className="md:flex md:flex-row md:justify-between gap-4">
        <HyperHire className="mt-4" />
        <ServiceGrid />
      </div>
      <Footer />
    </div>
  );
}
