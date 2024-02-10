export type TemType =
  | "neutral"
  | "fire"
  | "nature"
  | "water"
  | "electric"
  | "mental"
  | "earth"
  | "wind"
  | "crystal"
  | "digital"
  | "melee"
  | "toxic";

type DamageModifier = {
  deal: {
    half: TemType[];
    double: TemType[];
  };
  take: {
    half: TemType[];
    double: TemType[];
  };
};

export type TemTypeDefinition = {
  id: TemType;
  name: string;
  icon: string;
  colour: string;
} & DamageModifier;

export const temTypes: TemTypeDefinition[] = [
  {
    id: "neutral",
    name: "Neutral",
    icon: "neutral",
    colour: "#E7F7F7",
    deal: {
      half: ["mental"],
      double: [],
    },
    take: {
      half: [],
      double: ["mental"],
    },
  },
  {
    id: "fire",
    name: "Fire",
    icon: "fire",
    colour: "#E95C4D",
    deal: {
      half: ["fire", "water", "earth"],
      double: ["nature", "crystal"],
    },
    take: {
      half: ["nature", "fire", "crystal"],
      double: ["water", "earth"],
    },
  },
  {
    id: "nature",
    name: "Nature",
    icon: "nature",
    colour: "#AEDF77",
    deal: {
      half: ["fire", "nature", "toxic"],
      double: ["water", "earth"],
    },
    take: {
      half: ["water", "nature", "earth", "electric"],
      double: ["water", "earth"],
    },
  },
  {
    id: "water",
    name: "Water",
    icon: "water",
    colour: "#43CCFF",
    deal: {
      half: ["toxic", "water", "nature"],
      double: ["fire", "earth", "digital"],
    },
    take: {
      half: ["earth", "fire", "water"],
      double: ["nature", "electric", "toxic"],
    },
  },
  {
    id: "electric",
    name: "Electric",
    icon: "electric",
    colour: "#FFE275",
    deal: {
      half: ["crystal", "nature", "earth", "electric"],
      double: ["mental", "water", "digital", "wind"],
    },
    take: {
      half: ["electric", "wind"],
      double: ["earth", "crystal"],
    },
  },
  {
    id: "mental",
    name: "Mental",
    icon: "mental",
    colour: "#C469A4",
    deal: {
      half: ["crystal"],
      double: ["neutral", "melee"],
    },
    take: {
      half: ["neutral", "melee"],
      double: ["crystal", "digital", "electric"],
    },
  },
  {
    id: "earth",
    name: "Earth",
    icon: "earth",
    colour: "#BB7A5C",
    deal: {
      half: ["nature", "water", "wind"],
      double: ["crystal", "fire", "electric"],
    },
    take: {
      half: ["crystal", "fire", "electric", "toxic"],
      double: ["melee", "nature", "water", "wind"],
    },
  },
  {
    id: "wind",
    name: "Wind",
    icon: "wind",
    colour: "#01FAB5",
    deal: {
      half: ["electric", "wind"],
      double: ["toxic"],
    },
    take: {
      half: ["wind", "earth"],
      double: ["electric"],
    },
  },
  {
    id: "crystal",
    name: "Crystal",
    icon: "crystal",
    colour: "#EB4868",
    deal: {
      half: ["fire", "earth"],
      double: ["mental", "electric"],
    },
    take: {
      half: ["mental", "electric", "toxic"],
      double: ["melee", "fire", "earth"],
    },
  },
  {
    id: "digital",
    name: "Digital",
    icon: "digital",
    colour: "#A5C1C2",
    deal: {
      half: [],
      double: ["mental", "digital", "melee"],
    },
    take: {
      half: ["toxic"],
      double: ["electric", "water", "digital"],
    },
  },
  {
    id: "melee",
    name: "Melee",
    icon: "melee",
    colour: "#FA9360",
    deal: {
      half: ["mental", "melee"],
      double: ["earth", "crystal"],
    },
    take: {
      half: ["melee"],
      double: ["mental", "digital"],
    },
  },
  {
    id: "toxic",
    name: "Toxic",
    icon: "toxic",
    colour: "#5B555B",
    deal: {
      half: ["crystal", "earth", "digital", "toxic"],
      double: ["water", "nature"],
    },
    take: {
      half: ["water", "nature", "toxic"],
      double: ["wind"],
    },
  },
];

export function temTypeById(id: TemType): TemTypeDefinition | undefined {
  return temTypes.find((temType) => temType.id === id);
}
