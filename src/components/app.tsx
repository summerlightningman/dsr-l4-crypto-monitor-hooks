import React from 'react';
import Search from "./search";
import Main from "./styled/main";

import {AppProps, AppState} from "../types/app";
import CurrencyList from "./currency-list";


class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            observableCurrencyList: ['DOGE']
        }
    }


    render() {
        return <Main>
            <Search/>
            <CurrencyList currencyList={this.state.observableCurrencyList}/>
        </Main>
    }
}

export default App;
