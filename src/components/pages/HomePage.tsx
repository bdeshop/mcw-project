import { Hero } from "../home/Hero";
import { FeaturedGames } from "../home/FeaturedGames";
import { Favourites } from "../home/Favourites";
import { PopularGames } from "../home/PopularGames";
import { GameProviders } from "../home/GameProviders";

const Casino = () => {
  return (
    <main className="pt-[106px] md:pt-[128px] md:pb-4">
      <Hero />
      <div className="space-y-4 md:space-y-8 py-2 md:py-4">
        <FeaturedGames />
        <Favourites />
        <PopularGames />
        <GameProviders />
      </div>
    </main>
  );
};

export default Casino;
