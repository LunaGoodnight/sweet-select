import React from 'react';

import './App.css';
import GlobalStyle from './styles/globalStyle';
import {TreeSelector} from "./components/treeSelect/TreeSelector";
import {useSweetTree} from "./components/treeSelect/useSweetTree";
import {treeData} from "./data/treeData";
import styled from "styled-components";
export const FilterBlock = styled.div`

  width: 13rem;
`
function App() {
  const treeSelect = useSweetTree({ list: treeData })
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <FilterBlock>

          <TreeSelector {...treeSelect} />
        </FilterBlock>
      </header>
    </div>
  );
}

export default App;
