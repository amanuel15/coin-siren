import CardsCarousel from "@/components/cards-carousel";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-br from-[#03b7be] to-[#098bd7]">
      <div className="container mx-auto">
        Coin siren
        <CardsCarousel />
      </div>
    </div>
  );
}
