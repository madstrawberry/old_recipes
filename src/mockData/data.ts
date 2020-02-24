import { Recipe } from '../models';

const rawData: Omit<Recipe, 'id'>[] = [
  {
    name: 'Spinazitaart',
    description: 'lekker',
    ingredients: [
      { name: 'spinazie diepvries', amount: 700, unit: 'gr' },
      { name: 'feta', amount: 200, unit: 'gr' },
      { name: 'tomaten', amount: 2, unit: 'pc' },
      { name: 'bladerdeeg vellen', amount: 5, unit: 'pc' },
      { name: 'geraspte kaas', amount: 1, unit: 'pc' },
    ],
    type: ['vegetarian'],
    category: ['dinner'],
    time: 40,
  },
  {
    name: 'Zoete aardappel patat',
    description: 'lekker met aioli',
    ingredients: [
      { name: 'zoete aardappel', amount: 300, unit: 'gr' },
      { name: 'olijfolie', amount: 2, unit: 'tbs' },
      { name: 'kruiden naar smaak', amount: 2, unit: 'ts' },
    ],
    type: ['vegetarian', 'vegan'],
    category: ['dinner', 'sidedish'],
    time: 30,
  },
  {
    name: 'Cheesecake',
    description: 'lekker lekker',
    ingredients: [
      { name: 'roomkaas', amount: 900, unit: 'gr' },
      { name: 'suiker', amount: 300, unit: 'gr' },
      { name: 'koekjes', amount: 250, unit: 'gr' },
    ],
    type: ['vegetarian', 'sweet'],
    category: ['dessert', 'sidedish'],
    time: 200,
  },
];

export const data: Recipe[] = rawData.map((a, index) => ({ ...a, id: index + 1 }));
