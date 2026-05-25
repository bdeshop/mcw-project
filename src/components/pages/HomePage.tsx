import { useEffect, useRef, useState } from "react";
import { Hero } from "../home/Hero";
import { FeaturedGames } from "../home/FeaturedGames";
import { Favourites } from "../home/Favourites";
import { PopularGames } from "../home/PopularGames";
import { GameProviders } from "../home/GameProviders";
import { MobileCategoryNav, type MobileCategoryId } from "../home/MobileCategoryNav";

const Casino = () => {
  const [activeCategory, setActiveCategory] = useState<MobileCategoryId>("hot");
  const [isNavPinned, setIsNavPinned] = useState(false);
  const navTriggerRef = useRef<HTMLDivElement>(null);

  const MOBILE_HEADER_HEIGHT = 64;
  const MOBILE_CATEGORY_NAV_HEIGHT = 48;

  const handleCategoryChange = (category: MobileCategoryId) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    if (!navTriggerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavPinned(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-${MOBILE_HEADER_HEIGHT}px 0px 0px 0px`,
      }
    );

    observer.observe(navTriggerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="pt-16 md:pt-32">
      <Hero isPinned={isNavPinned} />
      <div ref={navTriggerRef} className="md:hidden h-px" />
      <div className={`md:hidden ${isNavPinned ? "h-12" : "h-14.5"}`}>
        <MobileCategoryNav
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          isPinned={isNavPinned}
          className={isNavPinned ? "fixed top-16 left-0 right-0 z-40" : "relative"}
        />
      </div>
      <div className="space-y-3 md:space-y-8 py-2 md:py-4">
        <FeaturedGames category={activeCategory} />
        <Favourites />
        <PopularGames />
        <GameProviders />
      </div>
    </main>
  );
};

export default Casino;
