import { SolarizedColor } from "../solarized-color";

export const jsonTokenColors =[
  {
    name: "JSON.quotes",
    scope: [
      "punctuation.definition.string.begin.json",
      "punctuation.definition.string.end.json",
      "punctuation.support.type.property-name.begin.json",
      "punctuation.support.type.property-name.end.json",
    ],
    settings: {
      foreground: SolarizedColor.Yellow,
    },
  },
  {
    name: "JSON.propertyName",
    scope: ["support.type.property-name.json"],
    settings: {
      foreground: SolarizedColor.Violet,
    },
  },
];