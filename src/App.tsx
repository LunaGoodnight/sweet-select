import React from "react";
import { TreeSelector } from "./components/treeSelect/TreeSelector";
import { useSweetTree } from "./components/treeSelect/useSweetTree";
import { FilterBlock, Title } from "./styles/demoStyle";
import GlobalStyle from "./styles/globalStyle";
import { treeData } from "./data/treeData";
import "./App.css";

function App() {
  const treeSelect = useSweetTree({ list: treeData });
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <FilterBlock>
          <Title>Tree</Title>
          <TreeSelector {...treeSelect} />
        </FilterBlock>
      </header>
    </div>
  );
}

export default App;
