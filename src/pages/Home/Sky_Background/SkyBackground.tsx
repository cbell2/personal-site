import PineTreeBackground from "../Pine_Tree/PineTreeBackground";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface TimeOfDayStyling {
  skyColor: string;
  sunColor: string;
  cloudColor: string;
  pineTreeColor: {
    layer1: string;
    layer2: string;
    layer3: string;
  };
}

const TIME_ENUMS = {
  SUNRISE: "SUNRISE",
  DAY: "DAY",
  SUNSET: "SUNSET",
  NIGHT: "NIGHT",
};

const TimeOfDayStylingMapping: Record<string, TimeOfDayStyling> = {
  [TIME_ENUMS.SUNRISE]: {
    skyColor: "#ffdcc6",
    sunColor: "#ffe9dd",
    cloudColor: "#FFDDC1",
    pineTreeColor: {
      layer1: "#7b0032",
      layer2: "#c8273f",
      layer3: "#ff583e",
    },
  },
  [TIME_ENUMS.DAY]: {
    skyColor: "#b7d4f6",
    sunColor: "#ffffff",
    cloudColor: "#FFFFFF",
    pineTreeColor: {
      layer1: "#0d1c23",
      layer2: "#1a2f30",
      layer3: "#225246",
    },
  },
  [TIME_ENUMS.SUNSET]: {
    skyColor: "#ffa11b",
    sunColor: "#ffe36e",
    cloudColor: "#FFA07A",
    pineTreeColor: {
      layer1: "#2f0b0d",
      layer2: "#400f12",
      layer3: "#5e1816",
    },
  },
  [TIME_ENUMS.NIGHT]: {
    skyColor: "#3054a5",
    sunColor: "#F4E1C1",
    cloudColor: "#2F4F4F",
    pineTreeColor: {
      layer1: "#080d18",
      layer2: "#0b1426",
      layer3: "#132140",
    },
  },
};

function SkyBackground() {
  let dayNightCycleCounter = useRef(0); // Goes to 60, then decrements back to 0
  let isDayNightCycleIncreasing = true; // Toggles if the day/night cycle is incrementing to 30 or decreasing to 0
  const [timeOfDay, setTimeOfDay] = useState(TIME_ENUMS.SUNRISE);
  const [timeOfDayStyling, setTimeOfDayStyling] = useState(
    TimeOfDayStylingMapping[TIME_ENUMS.SUNRISE]
  );

  function SetCounter(counter: number) {
    if (counter > 29) {
      console.log("*** Switching to decreasing");
      isDayNightCycleIncreasing = false;
    } else if (counter < 1) {
      console.log("*** Switching to increasing");
      isDayNightCycleIncreasing = true;
    }

    if (isDayNightCycleIncreasing) {
      return counter + 1;
    } else {
      return counter - 1;
    }
  }

  function SetTimeOfDay(counter: number) {
    if (counter < 10 && isDayNightCycleIncreasing) {
      console.log("******** SUNRISE");
      setTimeOfDay(TIME_ENUMS.SUNRISE);
      setTimeOfDayStyling(TimeOfDayStylingMapping[TIME_ENUMS.SUNRISE]);
      return TIME_ENUMS.SUNRISE;
    } else if (counter < 31 && isDayNightCycleIncreasing) {
      console.log("******** DAY");
      setTimeOfDay(TIME_ENUMS.DAY);
      setTimeOfDayStyling(TimeOfDayStylingMapping[TIME_ENUMS.DAY]);
    } else if (counter > 20 && !isDayNightCycleIncreasing) {
      console.log("******** SUNSET");
      setTimeOfDay(TIME_ENUMS.SUNSET);
      setTimeOfDayStyling(TimeOfDayStylingMapping[TIME_ENUMS.SUNSET]);
    } else {
      console.log("******** NIGHT");
      setTimeOfDay(TIME_ENUMS.NIGHT);
      setTimeOfDayStyling(TimeOfDayStylingMapping[TIME_ENUMS.NIGHT]);
    }
  }

  function DayNightCycleController(counter: number) {
    // Update the time of day based on the counter
    SetTimeOfDay(counter);
    // Update the styling based on the time of day
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // Set the counter
      dayNightCycleCounter.current = SetCounter(dayNightCycleCounter.current);
      DayNightCycleController(dayNightCycleCounter.current);
      console.log("*** STYLING:", timeOfDayStyling);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        className="background"
        style={{ background: timeOfDayStyling.skyColor }}
        animate={{
          background: timeOfDayStyling.skyColor,
        }}
        transition={{ duration: 10, ease: "easeInOut" }}
      >
        <Sun style={{ background: timeOfDayStyling.sunColor }}></Sun>
        <PineTreeBackground
          pineTreeStyling={[
            { color: timeOfDayStyling.pineTreeColor.layer3 },
            { color: timeOfDayStyling.pineTreeColor.layer2 },
            { color: timeOfDayStyling.pineTreeColor.layer1 },
          ]}
        ></PineTreeBackground>
      </motion.div>
      {/* <motion.div
        animate={{
          backgroundColor: timeOfDayStyling.skyColor,
          color: timeOfDayStyling.sunColor, // Animate text color
        }}
        transition={{ duration: 10, ease: "easeInOut" }}
        style={{
          backgroundColor: timeOfDayStyling.skyColor,
          color: timeOfDayStyling.sunColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Current Time of Day {dayNightCycleCounter.current}</h1>
      </motion.div> */}
    </>
  );
}

// ==========================================
// TODO: Create separate components for these
// ==========================================

interface SunProps {
  style: {
    background: string;
  };
}

const Sun = ({ style }: SunProps) => {
  const controls = useAnimation();
  useEffect(() => {
    const animateSun = async () => {
      while (true) {
        // Sunset
        await controls.start({
          y: "-100vh",
          background: style.background,
          transition: { duration: 29, ease: "linear" },
        });
        // Sunrise
        await controls.start({
          y: "30vh",
          background: style.background,
          transition: { duration: 29, ease: "linear" },
        });
      }
    };

    animateSun();
  }, [controls]);

  return (
    <motion.div
      className="sun"
      style={style}
      animate={controls}
      transition={{ duration: 10, ease: "easeInOut" }}
    />
  );
};

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

export default SkyBackground;
