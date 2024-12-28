import PineTree from "../SVG_Components/svg_PineTree";

interface PositionObj {
  x: string;
  y: string;
  z: string;
  transform?: string;
}

interface Size {
  width: string;
  height: string;
  marginTop?: string; // Needed if the height of the tree is shorter/taller than average
}

interface PineTreeObj {
  position: PositionObj;
  size: Size;
  color: string;
}

const PINE_TREE_DARK_GREEN = "#344e41";

const pineTreeBackground1: PineTreeObj[] = [
  {
    position: { x: "-100%", y: "20%", z: "5" },
    size: { width: "300%", height: "18vw", marginTop: "14vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "-7%", y: "20%", z: "5" },
    size: { width: "17%", height: "30vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "3%", y: "20%", z: "5" },
    size: { width: "20%", height: "25vw", marginTop: "5vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "13%", y: "20%", z: "5", transform: "scaleX(-1)" },
    size: { width: "21%", height: "23vw", marginTop: "7vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "28%", y: "20%", z: "5" },
    size: { width: "14%", height: "40vw", marginTop: "-10vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "35%", y: "20%", z: "5", transform: "scaleX(-1)" },
    size: { width: "17%", height: "28vw", marginTop: "2vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "48%", y: "20%", z: "5", transform: "scaleX(-1)" },
    size: { width: "17%", height: "30vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "60%", y: "20%", z: "5" },
    size: { width: "16%", height: "36vw", marginTop: "-6vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "70%", y: "20%", z: "5" },
    size: { width: "17%", height: "29vw", marginTop: "1vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "82%", y: "20%", z: "5", transform: "scaleX(-1)" },
    size: { width: "19%", height: "25vw", marginTop: "5vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "93%", y: "20%", z: "5" },
    size: { width: "17%", height: "30vw" },
    color: PINE_TREE_DARK_GREEN,
  },
];

const PINE_TREE_MEDIUM_GREEN = "#597f56";

const pineTreeBackground2: PineTreeObj[] = [
  {
    position: { x: "-100%", y: "20%", z: "4" },
    size: { width: "300%", height: "10vw", marginTop: "7vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "1%", y: "20%", z: "4", transform: "scaleX(-1)" },
    size: { width: "17%", height: "30vw", marginTop: "-10vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "14%", y: "20%", z: "4" },
    size: { width: "15%", height: "23vw", marginTop: "-3vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "23%", y: "20%", z: "4" },
    size: { width: "18%", height: "20vw", marginTop: "0vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "33%", y: "20%", z: "4", transform: "scaleX(-1)" },
    size: { width: "18%", height: "32vw", marginTop: "-12vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "43%", y: "20%", z: "4" },
    size: { width: "17%", height: "28vw", marginTop: "-8vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "55%", y: "20%", z: "4", transform: "scaleX(-1)" },
    size: { width: "17%", height: "30vw", marginTop: "-10vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "63%", y: "20%", z: "4", transform: "scaleX(-1)" },
    size: { width: "16%", height: "26vw", marginTop: "-6vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "72%", y: "20%", z: "4" },
    size: { width: "17%", height: "29vw", marginTop: "-9vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "81%", y: "20%", z: "4", transform: "scaleX(-1)" },
    size: { width: "19%", height: "25vw", marginTop: "-5vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "90%", y: "20%", z: "4" },
    size: { width: "17%", height: "15vw", marginTop: "5vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
];

const PINE_TREE_LIGHT_GREEN = "#a4ae8b";

const pineTreeBackground3: PineTreeObj[] = [
  {
    position: { x: "-5%", y: "20%", z: "3" },
    size: { width: "17%", height: "30vw", marginTop: "-20vw" },
    color: PINE_TREE_LIGHT_GREEN,
  },
  {
    position: { x: "10%", y: "20%", z: "3", transform: "scaleX(-1)" },
    size: { width: "15%", height: "23vw", marginTop: "-13vw" },
    color: PINE_TREE_LIGHT_GREEN,
  },
  {
    position: { x: "18%", y: "20%", z: "3" },
    size: { width: "18%", height: "20vw", marginTop: "-10vw" },
    color: PINE_TREE_LIGHT_GREEN,
  },
  {
    position: { x: "30%", y: "20%", z: "3" },
    size: { width: "18%", height: "30vw", marginTop: "-20vw" },
    color: PINE_TREE_LIGHT_GREEN,
  },
  {
    position: { x: "40%", y: "20%", z: "3", transform: "scaleX(-1)" },
    size: { width: "17%", height: "22vw", marginTop: "-12vw" },
    color: PINE_TREE_LIGHT_GREEN,
  },
  {
    position: { x: "50%", y: "20%", z: "3" },
    size: { width: "17%", height: "30vw", marginTop: "-20vw" },
    color: PINE_TREE_LIGHT_GREEN,
  },
  {
    position: { x: "61%", y: "20%", z: "3", transform: "scaleX(-1)" },
    size: { width: "16%", height: "26vw", marginTop: "-16vw" },
    color: PINE_TREE_LIGHT_GREEN,
  },
  {
    position: { x: "71%", y: "20%", z: "3", transform: "scaleX(-1)" },
    size: { width: "13%", height: "29vw", marginTop: "-19vw" },
    color: PINE_TREE_LIGHT_GREEN,
  },
  {
    position: { x: "79%", y: "20%", z: "3", transform: "scaleX(-1)" },
    size: { width: "16%", height: "25vw", marginTop: "-15vw" },
    color: PINE_TREE_LIGHT_GREEN,
  },
  {
    position: { x: "88%", y: "20%", z: "3" },
    size: { width: "18%", height: "18vw", marginTop: "-8vw" },
    color: PINE_TREE_LIGHT_GREEN,
  },
];

const pineTreeBackground: PineTreeObj[] = [
  ...pineTreeBackground1,
  ...pineTreeBackground2,
  ...pineTreeBackground3,
];

function PineTreeBackground() {
  return (
    <>
      <div>
        {pineTreeBackground.map((tree, index) => (
          <PineTree
            key={index}
            style={{
              position: "absolute",
              left: tree.position.x,
              top: tree.position.y,
              zIndex: tree.position.z,
              width: tree.size.width,
              height: tree.size.height,
              marginTop: tree.size.marginTop,
              transform: tree.position.transform,
            }}
            fillColor={tree.color}
          ></PineTree>
        ))}
      </div>
    </>
  );
}

export default PineTreeBackground;
