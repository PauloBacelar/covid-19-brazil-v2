import React from "react";
import "./App.css";
import State from "./State";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      states: [],
      loaded: false,
    };
  }

  componentDidMount() {
    fetch("https://covid19-brazil-api.now.sh/api/report/v1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ states: data, loaded: true });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>Dados da Pandemia de Covid-19 no Brasil</h1>
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/274/flag-brazil_1f1e7-1f1f7.png"
            className="brazil-flag"
            alt="Bandeira do Brasil"
          ></img>
        </div>

        <div className="states">
          {this.state.loaded
            ? this.state.states.data.map((uf) => {
                const imgUrl =
                  "https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/" +
                  uf.uf +
                  ".png";
                return <State data={uf} imgUrl={imgUrl} key={uf.uid} />;
              })
            : null}
        </div>
      </div>
    );
  }
}

export default App;
