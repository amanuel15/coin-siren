import { cn } from "@/lib/utils";
import OfferCard from "./offer-card";

export default function Offers({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-row gap-4", className)}>
      <OfferCard
        title="평균 월 120만원"
        content="임금을 해당 국가를 기준으로 계산합니다."
      />
      <OfferCard
        title="최대 3회 인력교체"
        content="막상 채용해보니 맞지 않아도 걱정하지 마세요. "
      />
      <OfferCard
        title="평균 3일, 최대 10일"
        content="급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다."
      />
    </div>
  );
}
