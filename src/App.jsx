import cadillac from "./image/cadillack.jpg";
import "../src/style.css";
const Photo = () => {
  return (
    <div>
      <img src={cadillac} />
    </div>
  );
};

const Title = () => {
  return (
    <div>
      <h1>cadillac Iran</h1>
    </div>
  );
};

const More = () => {
  return (
    <div>
      <h3>
        The Cadillac Seville is a mid-size luxury car manufactured by Cadillac
        from the 1976 to 2004 model years as a smaller-sized, premium model. It
        was replaced by the STS in 2004 for the 2005 model year.
      </h3>
    </div>
  );
};
const Btns = () => {
  return (
    <div>
      <button>Share</button>
      <button>Learn More</button>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <div className="card">
        <Photo />
        <Title />
        <More />
        <Btns />
      </div>
    </div>
  );
}

export default App;
