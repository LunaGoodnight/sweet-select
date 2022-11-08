import React from "react";
import { TreeSelector } from "./components/treeSelect/TreeSelector";
import { useSweetTree } from "./components/treeSelect/useSweetTree";
import { useSelect } from "./components/select/useSelect";
import { FilterBlock, Title } from "./styles/demoStyle";
import { Select } from "./components/select/Select";
import GlobalStyle from "./styles/globalStyle";
import { selectData } from "./data/selectData";
import { treeData } from "./data/treeData";
import "./App.css";

function App() {
  const treeSelect = useSweetTree({ list: treeData });
  const select = useSelect({ list: selectData });
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <FilterBlock>
          <Title>Select</Title>
          <Select {...select} />
        </FilterBlock>
        <FilterBlock>
          <Title>Tree</Title>
          <TreeSelector {...treeSelect} />
        </FilterBlock>
      </header>
    </div>
  );
}

export default App;
