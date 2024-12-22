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
    position: { x: "-5%", y: "20%", z: "5" },
    size: { width: "17%", height: "30vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "5%", y: "20%", z: "5" },
    size: { width: "20%", height: "25vw", marginTop: "5vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "17%", y: "20%", z: "5", transform: "scaleX(-1)" },
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
    position: { x: "-5%", y: "20%", z: "4" },
    size: { width: "17%", height: "30vw", marginTop: "-10vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "5%", y: "20%", z: "4" },
    size: { width: "20%", height: "25vw", marginTop: "-5vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "17%", y: "20%", z: "4", transform: "scaleX(-1)" },
    size: { width: "21%", height: "23vw", marginTop: "-3vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "28%", y: "20%", z: "4" },
    size: { width: "14%", height: "40vw", marginTop: "-20vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "35%", y: "20%", z: "4", transform: "scaleX(-1)" },
    size: { width: "17%", height: "28vw", marginTop: "-8vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "48%", y: "20%", z: "4", transform: "scaleX(-1)" },
    size: { width: "17%", height: "30vw", marginTop: "-10vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "60%", y: "20%", z: "4" },
    size: { width: "16%", height: "36vw", marginTop: "-16vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "70%", y: "20%", z: "4" },
    size: { width: "17%", height: "29vw", marginTop: "-9vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "82%", y: "20%", z: "4", transform: "scaleX(-1)" },
    size: { width: "19%", height: "25vw", marginTop: "-5vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "93%", y: "20%", z: "4" },
    size: { width: "17%", height: "30vw", marginTop: "-10vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
];

const pineTreeBackground: PineTreeObj[] = [
  ...pineTreeBackground1,
  ...pineTreeBackground2,
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
