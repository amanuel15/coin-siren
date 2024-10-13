import NeedDeveloperBtn from '@/components/atoms/need-developer-bnt';
import InfoTooltip from '@/components/molecules/info-tooltip';
import Navbar from '@/components/molecules/navbar';
import Offers from '@/components/molecules/offers';
import FieldsCarousel from '@/components/organisms/fields-carousel';
import SkillsGrid from '@/components/organisms/skills-grid';
import TalentsCarousel from '@/components/organisms/talents-carousel';

export default async function page() {
  const result = await fetch('http://localhost:3000/api/talents').then((res) => res.json());

  return (
    <div className=" bg-gradient-to-br from-[#03b7be] to-[#098bd7]">
      <Navbar />
      <div className="container flex flex-col gap-4 min-h-svh justify-around mx-auto px-4">
        <div className="md:flex md:flex-row md:gap-4">
          <div className="md:flex md:flex-col md:gap-4 md:flex-[2]">
            <div className="flex flex-col gap-4 text-primary-foreground my-8">
              <InfoTooltip className="animate-fadeUp delay-300 opacity-0">풀타임, 파트타임</InfoTooltip>
              <h2 className="text-4xl font-semibold text-primary-foreground animate-fadeUp">
                최고의 실력을 가진 외국인 인재를 찾고 계신가요?
              </h2>
              <h4 className="text-primary-foreground animate-fadeUp">
                법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
              </h4>
              <NeedDeveloperBtn className="hidden md:block" />
            </div>
            <Offers className="hidden md:flex md:animate-fadeIn" />
          </div>
          <TalentsCarousel talents={result} className="md:flex-[3]" />
        </div>
        <FieldsCarousel className="hidden md:block" />
        <SkillsGrid skills={['한국어 능력', '업무 수행 능력', '겸업 여부', '평판 조회']} className="grid md:hidden" />
        <NeedDeveloperBtn className="block md:hidden" />
      </div>
    </div>
  );
}
