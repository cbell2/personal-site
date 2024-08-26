import MountainLayer4 from "./SVG_Components/svg_MountainLayer4";
import MountainLayer3 from "./SVG_Components/svg_MountainLayer3";
import MountainLayer2 from "./SVG_Components/svg_MountainLayer2";
import MountainLayer1 from "./SVG_Components/svg_MountainLayer1";
import MountainLayer0 from "./SVG_Components/svg_MountainLayer0";
import CloudSVG from "./SVG_Components/svg_Cloud";

const SkyBackground = () => {
  return (
    <>
      <div className="background">
        <Title></Title>
        <Sun></Sun>
        <CloudLayer></CloudLayer>
        <MountainLayer4 fillColor="#e5a462"></MountainLayer4>
        <MountainLayer3 fillColor="#d38a60"></MountainLayer3>
        <MountainLayer2 fillColor="#c37c60"></MountainLayer2>
        <MountainLayer1
          fillColor="
#8b6870"
        ></MountainLayer1>
        <MountainLayer0 fillColor="#1e1f27"></MountainLayer0>
        <Home></Home>
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
      left: `${getRandomInt(0, 100)}%`,
      top: `${getRandomInt(0, 2)}%`,
      size: `${getRandomInt(100, 150)}rem`,
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
      <div
        className="cloud"
        style={{ left: location.left, top: location.top, width: location.size }}
      >
        <CloudSVG fillColor="#f5c8a4af"></CloudSVG>
      </div>
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
