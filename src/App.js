import "./App.css";
import profilePhoto from "./media/cris-delta.jpg";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="image" src={profilePhoto} alt="Cristina Pascal" />;
}

function Intro() {
  return (
    <div>
      <h2 className="name">Cristina Pascal</h2>
      <h4 className="title">Front-End Web developer</h4>
      <p className="description">
        Hey there! I'm the front-end virtuoso, turning caffeine into code and
        pixels into masterpieces. My superpower? Making websites look so good,
        even browsers do a double take. When I'm not battling bugs, you'll find
        me in a dance-off with CSS or sharing a cup of coffee with my one true
        love—JavaScript. Ready to embark on this pixel-perfect adventure
        together?
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skilllist">
      {" "}
      <Skill
        skillClass="skillButton html"
        emoji="👶"
        name="HTML"
        color="#40c3c2"
      ></Skill>
      <Skill
        skillClass="skillButton css"
        emoji="👶"
        name="CSS"
        color="#fdfcdc"
      ></Skill>
      <Skill
        skillClass="skillButton js"
        emoji="👶"
        name="JavaScript"
        color="#fbbfa3"
      ></Skill>
      <Skill
        skillClass="skillButton react"
        emoji="👶"
        name="React"
        color="#fca311"
      ></Skill>
      <Skill
        skillClass="skillButton git"
        emoji="👶"
        name="Git and GitHub"
        color="#f07167"
      ></Skill>
    </div>
  );
}

function Skill(props) {
  console.log(props);
  return (
    <div className="skillButton" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
