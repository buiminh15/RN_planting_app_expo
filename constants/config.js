import HomeScreen from "../src/components/HomeScreen";

const tabs = [
  {
    name: "Home",
    icon: require("../assets/icons/flash_icon.png"),
    component: HomeScreen,
  },
  {
    name: "Box",
    icon: require("../assets/icons/cube_icon.png"),
    component: HomeScreen,
  },
  {
    name: "Camera",
    icon: require("../assets/icons/camera.png"),
    component: HomeScreen,
  },
  {
    name: "Search",
    icon: require("../assets/icons/search_icon.png"),
    component: HomeScreen,
  },
  {
    name: "Favorite",
    icon: require("../assets/icons/heart_icon.png"),
    component: HomeScreen,
  },
];

export { tabs };
