import { icons, images } from "./constants";

const newPlantsData = [
  {
    id: 0,
    name: "Plant 1",
    img: images.plant1,
    favorite: false,
  },
  {
    id: 1,
    name: "Plant 2",
    img: images.plant2,
    favorite: true,
  },
  {
    id: 2,
    name: "Plant 3",
    img: images.plant3,
    favorite: false,
  },
  {
    id: 3,
    name: "Plant 4",
    img: images.plant4,
    favorite: false,
  },
];

const friendListData = [
  {
    id: 0,
    img: images.profile1,
  },
  {
    id: 1,
    img: images.profile2,
  },
  {
    id: 2,
    img: images.profile3,
  },
  {
    id: 3,
    img: images.profile4,
  },
  {
    id: 4,
    img: images.profile5,
  },
  {
    id: 5,
    img: images.profile5,
  },
];

const requirementsData = [
  {
    id: 1,
    name: 'Sunlight',
    value: 15,
    unit: '°C',
    total: 20,
    icon: icons.sun,
  },
  {
    id: 2,
    name: 'Water',
    value: 250,
    unit: 'ML Daily',
    total: 1000,
    icon: icons.drop,
  },
  {
    id: 3,
    name: 'Room Temp',
    value: 25,
    unit: '°C',
    total: 30,
    icon: icons.temperature,
  },
  {
    id: 4,
    name: 'Soil',
    value: 3,
    unit: 'Kg',
    total: 10,
    icon: icons.garden,
  },
  {
    id: 5,
    name: 'Fertilizer',
    value: 150,
    unit: 'Mg',
    total: 250,
    icon: icons.seed,
  },
]

export { friendListData, newPlantsData, requirementsData };
