import React from 'react';
import Search from "./search";
import Main from "./styled/main";

class App extends React.Component {
  render() {
    return <Main>
      <Search/>
    </Main>
  }
}

export default App;
