import { Flame, Trophy, Dices, Gamepad2, Gamepad, LayoutGrid, Fish, Ticket, Gift, Star } from "lucide-react";

export const NAV = [
  { label: "HOT", icon: Flame, active: true, arrow: true },
  { label: "Sports", icon: Trophy, arrow: true },
  { label: "Casino", icon: Dices, arrow: true },
  { label: "Slot", icon: Gamepad2, arrow: true },
  { label: "Crash", icon: Gamepad, arrow: true },
  { label: "Table", icon: LayoutGrid, arrow: true },
  { label: "Fishing", icon: Fish, arrow: true },
  { label: "Arcade", icon: Gamepad2, arrow: true },
  { label: "Lottery", icon: Ticket, arrow: true },
  { label: "Promotions", icon: Gift, arrow: false },
  { label: "VIP", icon: Star, arrow: false },
];

export const SLIDES = [
  { img: "/src/assets/hero/image_261526.jpg" },
  { img: "/src/assets/hero/image_280057.png" },
  { img: "/src/assets/hero/image_435082.jpg" },
];

export const FEATURED = [
  { name: "FC MEGA WIN", img: "/src/assets/features/leftimage1.jpg", grad: "from-amber-500 to-orange-800" },
  { name: "FC MAGIC ACE", img: "/src/assets/features/gameimage/FC-SLOT-004.png", grad: "from-blue-500 to-indigo-900" },
  { name: "FC FORTUNE GEMS", img: "/src/assets/features/gameimage/FC-SLOT-007.png", grad: "from-red-600 to-rose-900" },
  { name: "FC SUPER ACE", img: "/src/assets/features/gameimage/FC-SLOT-022.png", grad: "from-yellow-600 to-amber-900" },
  { name: "FC BOXING KING", img: "/src/assets/features/gameimage/FC-SLOT-024.png", grad: "from-fuchsia-600 to-purple-900" },
  { name: "FC JUNGLE KING", img: "/src/assets/features/gameimage/FC-SLOT-028.png", grad: "from-pink-500 to-red-800" },
  { name: "FC ALI BABA", img: "/src/assets/features/gameimage/FC-SLOT-034.png", grad: "from-indigo-600 to-blue-900" },
  { name: "FC ROMA", img: "/src/assets/features/gameimage/FC-SLOT-041.png", grad: "from-emerald-600 to-green-900" },
  { name: "FC CRAZY 777", img: "/src/assets/features/gameimage/FC-SLOT-043.png", grad: "from-fuchsia-600 to-purple-900" },
  { name: "FC TWIN WINS", img: "/src/assets/features/gameimage/FC-SLOT-048.png", grad: "from-emerald-600 to-green-900" },
];

export const FAVOURITES = [
  { n: "Lucky Tamarin", g: "from-emerald-500 to-green-900" },
  { n: "Fortune Garuda 500", g: "from-rose-500 to-red-900" },
  { n: "Gates of Olympus 1000", g: "from-blue-600 to-indigo-900" },
  { n: "Super Elements", g: "from-cyan-500 to-blue-900" },
  { n: "FlyX", g: "from-violet-600 to-purple-900" },
  { n: "Pocket Ace", g: "from-amber-500 to-orange-900" },
  { n: "Aztec Gems", g: "from-yellow-500 to-amber-900" },
  { n: "24D Spin", g: "from-pink-500 to-rose-900" },
  { n: "Super Ace", g: "from-red-500 to-orange-900" },
  { n: "Boxing King", g: "from-orange-600 to-red-900" },
];

export const POPULAR = [
  { n: "Lucky Tamarin", g: "from-emerald-600 to-green-900", img: "/src/assets/features/gameimage/FC-SLOT-041.png" },
  { n: "Super Ace Speed ...", g: "from-orange-600 to-red-900", img: "/src/assets/features/gameimage/FC-SLOT-043.png" },
  { n: "Super Ace", g: "from-red-600 to-rose-900", img: "/src/assets/features/gameimage/FC-SLOT-048.png" },
  { n: "Fortune Ace Super...", g: "from-amber-500 to-orange-900", img: "/src/assets/features/gameimage/FC-SLOT-049.png" },
  { n: "Fortune Garuda 500", g: "from-rose-600 to-red-900", img: "/src/assets/features/gameimage/FC-SLOT-004.png" },
  { n: "Crazy Time", g: "from-blue-600 to-indigo-900", img: "/src/assets/features/gameimage/FC-SLOT-007.png" },
];

export const PROVIDERS_ROW = ["WM", "PLAY8", "NETENT", "PP", "JILI", "JDB", "FC", "MG", "Evolution", "Ezugi", "Red Tiger"];
export const PROVIDERS_TABS = ["FC", "JILI", "JDB", "PP", "WorldMatch", "FastSpin"];


export const SIDEBAR_ITEMS = [
  { label: "HOT", icon: Flame, color: "text-casino-gold" },
  { label: "Sports", icon: Trophy },
  { label: "Casino", icon: Dices },
  { label: "Slot", icon: Gamepad2 },
  { label: "Crash", icon: Gamepad },
  { label: "Table", icon: LayoutGrid },
  { label: "Fishing", icon: Fish },
  { label: "Arcade", icon: LayoutGrid },
  { label: "Lottery", icon: Ticket },
];
