import { useState } from "react";
import kira from "./assets/kira.png";
import "./App.css";
import AnswerBox from "./components/AnswerBox";
import ChatBox from "./components/ChatBox";
import "./styles/_font.css";

function App() {
  const [answer, setAnswer] = useState("");

  return (
    <div className="App">
      <div className="imgCont">
        <img src={kira} width="150" height="150" className="img" />
      </div>
      <ChatBox setAnswer={setAnswer} />
      {answer.length > 0 && <AnswerBox answer={answer} />}
    </div>
  );
}

export default App;
