import React from "react";
import { SectionTitle, GameTile } from "./Common";
import { POPULAR } from "../../data/casinoData";
import { useLanguage } from "../../context/LanguageContext";

export const PopularGames = () => {
  const { t } = useLanguage();
  return (
    <section className="container mx-auto pb-8 px-4">
      <SectionTitle title={t("popularGames")} />
      <div className="flex md:grid md:grid-cols-6 gap-3 md:gap-3 overflow-x-auto no-scrollbar -mx-3 px-3 md:mx-0 md:px-0 pb-1">
        {POPULAR.map((g, i) => (
          <div key={i} className="w-[115px] md:w-auto flex-shrink-0">
            <GameTile name={g.n} grad={g.g} img={(g as any).img} />
          </div>
        ))}
      </div>
    </section>
  );
};
