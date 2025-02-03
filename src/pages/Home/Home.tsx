import SkyBackground from "./Sky_Background/SkyBackground";

const HomePage = () => {
  return (
    <>
      <SkyBackground></SkyBackground>
      {/* <Title></Title> */}
      <Home></Home>
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

export default HomePage;
