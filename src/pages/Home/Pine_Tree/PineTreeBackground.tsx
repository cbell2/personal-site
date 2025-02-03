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
  marginBottom?: string; // Needed if the height of the tree is shorter/taller than average
}

interface PineTreeObj {
  position: PositionObj;
  size: Size;
  color: string;
  filter?: string;
}

const PINE_TREE_DARK_GREEN = "#344e41";

const pineTreeBackground1: PineTreeObj[] = [
  {
    position: { x: "-100%", y: "0%", z: "5" },
    size: { width: "300%", height: "18vw", marginBottom: "-6vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "-7%", y: "0%", z: "5" },
    size: { width: "17%", height: "30vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "2%", y: "0%", z: "5" },
    size: { width: "21%", height: "25vw", marginBottom: "0vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "13%", y: "0%", z: "5", transform: "scaleX(-1)" },
    size: { width: "21%", height: "23vw", marginBottom: "0vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "28%", y: "0%", z: "5" },
    size: { width: "14%", height: "40vw", marginBottom: "0vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "35%", y: "0%", z: "5", transform: "scaleX(-1)" },
    size: { width: "17%", height: "28vw", marginBottom: "0vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "48%", y: "0%", z: "5", transform: "scaleX(-1)" },
    size: { width: "17%", height: "30vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "60%", y: "0%", z: "5" },
    size: { width: "16%", height: "36vw", marginBottom: "0vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "69%", y: "0%", z: "5" },
    size: { width: "19%", height: "29vw", marginBottom: "0vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "82%", y: "0%", z: "5", transform: "scaleX(-1)" },
    size: { width: "19%", height: "25vw", marginBottom: "0vw" },
    color: PINE_TREE_DARK_GREEN,
  },
  {
    position: { x: "93%", y: "0%", z: "5" },
    size: { width: "17%", height: "30vw" },
    color: PINE_TREE_DARK_GREEN,
  },
];

const PINE_TREE_MEDIUM_GREEN = "#597f56";
// const PINE_TREE_MEDIUM_DIST_FILTER = "blur(.05rem)";
const PINE_TREE_MEDIUM_DIST_FILTER = "";

const pineTreeBackground2: PineTreeObj[] = [
  {
    position: { x: "-100%", y: "0%", z: "4" },
    size: { width: "300%", height: "12vw", marginBottom: "7vw" },
    color: PINE_TREE_MEDIUM_GREEN,
  },
  {
    position: { x: "1%", y: "0%", z: "4", transform: "scaleX(-1)" },
    size: { width: "17%", height: "30vw", marginBottom: "10vw" },
    color: PINE_TREE_MEDIUM_GREEN,
    filter: PINE_TREE_MEDIUM_DIST_FILTER,
  },
  {
    position: { x: "14%", y: "0%", z: "4" },
    size: { width: "15%", height: "23vw", marginBottom: "10vw" },
    color: PINE_TREE_MEDIUM_GREEN,
    filter: PINE_TREE_MEDIUM_DIST_FILTER,
  },
  {
    position: { x: "23%", y: "0%", z: "4" },
    size: { width: "18%", height: "20vw", marginBottom: "10vw" },
    color: PINE_TREE_MEDIUM_GREEN,
    filter: PINE_TREE_MEDIUM_DIST_FILTER,
  },
  {
    position: { x: "33%", y: "0%", z: "4", transform: "scaleX(-1)" },
    size: { width: "18%", height: "32vw", marginBottom: "10vw" },
    color: PINE_TREE_MEDIUM_GREEN,
    filter: PINE_TREE_MEDIUM_DIST_FILTER,
  },
  {
    position: { x: "43%", y: "0%", z: "4" },
    size: { width: "17%", height: "28vw", marginBottom: "10vw" },
    color: PINE_TREE_MEDIUM_GREEN,
    filter: PINE_TREE_MEDIUM_DIST_FILTER,
  },
  {
    position: { x: "55%", y: "0%", z: "4", transform: "scaleX(-1)" },
    size: { width: "17%", height: "30vw", marginBottom: "10vw" },
    color: PINE_TREE_MEDIUM_GREEN,
    filter: PINE_TREE_MEDIUM_DIST_FILTER,
  },
  {
    position: { x: "63%", y: "0%", z: "4", transform: "scaleX(-1)" },
    size: { width: "16%", height: "26vw", marginBottom: "10vw" },
    color: PINE_TREE_MEDIUM_GREEN,
    filter: PINE_TREE_MEDIUM_DIST_FILTER,
  },
  {
    position: { x: "72%", y: "0%", z: "4" },
    size: { width: "17%", height: "29vw", marginBottom: "10vw" },
    color: PINE_TREE_MEDIUM_GREEN,
    filter: PINE_TREE_MEDIUM_DIST_FILTER,
  },
  {
    position: { x: "81%", y: "0%", z: "4", transform: "scaleX(-1)" },
    size: { width: "19%", height: "25vw", marginBottom: "10vw" },
    color: PINE_TREE_MEDIUM_GREEN,
    filter: PINE_TREE_MEDIUM_DIST_FILTER,
  },
  {
    position: { x: "90%", y: "0%", z: "4" },
    size: { width: "17%", height: "15vw", marginBottom: "10vw" },
    color: PINE_TREE_MEDIUM_GREEN,
    filter: PINE_TREE_MEDIUM_DIST_FILTER,
  },
];

const PINE_TREE_LIGHT_GREEN = "#a4ae8b";
// const PINE_TREE_LONG_DIST_FILTER = "blur(.1rem)";
const PINE_TREE_LONG_DIST_FILTER = "";

const pineTreeBackground3: PineTreeObj[] = [
  {
    position: { x: "-100%", y: "0%", z: "3" },
    size: { width: "300%", height: "12vw", marginBottom: "17vw" },
    color: PINE_TREE_LIGHT_GREEN,
    filter: PINE_TREE_LONG_DIST_FILTER,
  },
  {
    position: { x: "-5%", y: "0%", z: "3" },
    size: { width: "17%", height: "30vw", marginBottom: "20vw" },
    color: PINE_TREE_LIGHT_GREEN,
    filter: PINE_TREE_LONG_DIST_FILTER,
  },
  {
    position: { x: "10%", y: "0%", z: "3", transform: "scaleX(-1)" },
    size: { width: "15%", height: "23vw", marginBottom: "20vw" },
    color: PINE_TREE_LIGHT_GREEN,
    filter: PINE_TREE_LONG_DIST_FILTER,
  },
  {
    position: { x: "18%", y: "0%", z: "3" },
    size: { width: "18%", height: "20vw", marginBottom: "20vw" },
    color: PINE_TREE_LIGHT_GREEN,
    filter: PINE_TREE_LONG_DIST_FILTER,
  },
  {
    position: { x: "30%", y: "0%", z: "3" },
    size: { width: "18%", height: "30vw", marginBottom: "20vw" },
    color: PINE_TREE_LIGHT_GREEN,
    filter: PINE_TREE_LONG_DIST_FILTER,
  },
  {
    position: { x: "40%", y: "0%", z: "3", transform: "scaleX(-1)" },
    size: { width: "17%", height: "22vw", marginBottom: "20vw" },
    color: PINE_TREE_LIGHT_GREEN,
    filter: PINE_TREE_LONG_DIST_FILTER,
  },
  {
    position: { x: "50%", y: "0%", z: "3" },
    size: { width: "17%", height: "30vw", marginBottom: "20vw" },
    color: PINE_TREE_LIGHT_GREEN,
    filter: PINE_TREE_LONG_DIST_FILTER,
  },
  {
    position: { x: "61%", y: "0%", z: "3", transform: "scaleX(-1)" },
    size: { width: "16%", height: "26vw", marginBottom: "20vw" },
    color: PINE_TREE_LIGHT_GREEN,
    filter: PINE_TREE_LONG_DIST_FILTER,
  },
  {
    position: { x: "71%", y: "0%", z: "3", transform: "scaleX(-1)" },
    size: { width: "13%", height: "29vw", marginBottom: "20vw" },
    color: PINE_TREE_LIGHT_GREEN,
    filter: PINE_TREE_LONG_DIST_FILTER,
  },
  {
    position: { x: "79%", y: "0%", z: "3", transform: "scaleX(-1)" },
    size: { width: "16%", height: "25vw", marginBottom: "20vw" },
    color: PINE_TREE_LIGHT_GREEN,
    filter: PINE_TREE_LONG_DIST_FILTER,
  },
  {
    position: { x: "88%", y: "0%", z: "3" },
    size: { width: "18%", height: "18vw", marginBottom: "20vw" },
    color: PINE_TREE_LIGHT_GREEN,
    filter: PINE_TREE_LONG_DIST_FILTER,
  },
];

const pineTreeBackground: PineTreeObj[] = [
  ...pineTreeBackground1,
  ...pineTreeBackground2,
  ...pineTreeBackground3,
];

interface PineTreeBackgroundProps {
  pineTreeStyling: [{ color: string }, { color: string }, { color: string }];
}

const PineTreeBackground: React.FC<PineTreeBackgroundProps> = ({
  pineTreeStyling,
}) => {
  return (
    <>
      <div>
        {pineTreeBackground.map((tree, index) => (
          <PineTree
            key={index}
            style={{
              position: "absolute",
              left: tree.position.x,
              bottom: tree.position.y,
              zIndex: tree.position.z,
              width: tree.size.width,
              height: tree.size.height,
              marginBottom: tree.size.marginBottom,
              transform: tree.position.transform,
              filter: tree.filter,
            }}
            fillColor={
              pineTreeStyling[Number(tree.position.z) - 3]?.color || tree.color
            }
          ></PineTree>
        ))}
      </div>
    </>
  );
};

export default PineTreeBackground;
