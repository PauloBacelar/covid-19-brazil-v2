import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Dados da Pandemia de Covid-19 no Brasil</h1>
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/274/flag-brazil_1f1e7-1f1f7.png"
          className="brazil-flag"
        ></img>
      </div>

      <div className="states">
        <img src="https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/SP.png"></img>
        <h2>Other data</h2>
      </div>
    </div>
  );
}

export default App;
