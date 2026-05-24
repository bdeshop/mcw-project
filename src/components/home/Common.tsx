import React from "react";

export const SectionTitle = ({ title, right }: { title: string; right?: React.ReactNode }) => (
  <div className="flex items-center justify-between gap-2 mb-2.5 flex-wrap">
    <div className="flex items-center gap-1.5">
      <span className="w-0.5 h-3.5 bg-casino-gold rounded-sm" />
      <h2 className="text-[13px] md:text-lg font-bold text-casino-text uppercase tracking-tight">{title}</h2>
    </div>
    {right}
  </div>
);

export const GameTile = ({ name, grad, img, provider }: { name: string; grad?: string; img?: string; provider?: string }) => (
  <div className="group cursor-pointer flex flex-col h-full active:scale-95 transition-transform overflow-hidden rounded-lg border border-white/5 shadow-lg bg-[#232a44]">
    <div
      className={`relative aspect-[3.2/3] w-full overflow-hidden ${img ? '' : 'bg-linear-to-br ' + (grad || 'from-[#1e2439] to-[#0e1220]')}`}
      style={img ? { backgroundImage: `url('${img}')`, backgroundSize: '100% 100%', backgroundPosition: 'center' } : undefined}
    >
  
      {/* Provider Badge */}
      <div className="absolute top-0 left-0 bg-linear-to-br from-casino-gold to-[#8E6D24] text-[#1a1f33] text-[7px] md:text-[9px] font-black px-1.5 py-0.5 rounded-br-lg z-10 uppercase">
        {provider || 'FC'}
      </div>

      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="py-2 px-3 bg-[#232a44]">
      <p className="text-[10px] md:text-xs font-black text-white uppercase truncate tracking-tight group-hover:text-casino-gold transition-colors">
        {provider || 'FC'} {name}
      </p>
    </div>
  </div>
);
