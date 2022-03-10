import React from 'react';
import Search from "./search";
import Main from "./styled/main";
import CurrencyList from "./currency-list";

class App extends React.Component {
  render() {
    return <Main>
      <Search/>
      <CurrencyList/>
    </Main>
  }
}

export default App;
