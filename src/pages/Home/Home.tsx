import { motion } from "framer-motion";
// import MountainLayer4 from "./SVG_Components/svg_PineTree";
// import MountainLayer3 from "./SVG_Components/svg_MountainLayer3";
// import MountainLayer2 from "./SVG_Components/svg_MountainLayer2";
// import MountainLayer1 from "./SVG_Components/svg_MountainLayer1";
// import MountainLayer0 from "./SVG_Components/svg_MountainLayer0";
import CloudSVG from "./SVG_Components/svg_Cloud";
import PineTreeBackground from "./Pine_Tree/PineTreeBackground";

const SkyBackground = () => {
  return (
    <>
      <div className="background">
        {/* <Title></Title> */}
        <Sun></Sun>
        <Home></Home>
        {/* <CloudLayer></CloudLayer> */}
        {/* <PineTree fillColor={"red"}></PineTree> */}
        <PineTreeBackground></PineTreeBackground>
      </div>
    </>
  );
};

function Title() {
  return (
    <>
      <span className="title-container">
        <h1>This is the Placeholder Title</h1>
        <h2>This is the placeholder subtitle</h2>
      </span>
    </>
  );
}

function Sun() {
  return (
    <>
      <div className="sun"></div>
    </>
  );
}

function CloudLayer() {
  const cloudLocationArray = [];

  // Randomly generate cloud positions
  for (let i = 0; i < getRandomInt(2, 4); i++) {
    cloudLocationArray.push({
      delay: `$getRandomInt(0, 30)s`,
      top: `${getRandomInt(-20, 2)}%`,
      size: `${getRandomInt(50, 150)}rem`,
    });
  }

  return (
    <>
      {cloudLocationArray.map((cloudLocation) => (
        <Cloud location={cloudLocation}></Cloud>
      ))}
    </>
  );
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function Cloud({ location }) {
  return (
    <>
      <motion.div
        className="cloud"
        style={{ top: location.top, width: location.size }}
        animate={{
          animationDelay: location.delay,
          x: [0, "-175%"],
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
        }}
      >
        <CloudSVG fillColor="#f5c8a4af"></CloudSVG>
      </motion.div>
    </>
  );
}

function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </>
  );
}

export default SkyBackground;
