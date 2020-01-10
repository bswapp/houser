import React from "react";
import "./App.css";
import Header from "../src/Components/Header/Header";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import store from "./ducks/store";
import { Provider } from "react-redux";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App">
          <Header />
          {routes}
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
