import Navbar from "../../components/Navbar/Navbar";

function Home() {
  const handleClick = () => {
    console.log("CLICK");
  };

  return (
    <>
      <Navbar />
      <div className="home">
        <h1>Swipe Right</h1>
        <button onClick={handleClick}>Let's Play</button>
      </div>
    </>
  );
}

export default Home;
