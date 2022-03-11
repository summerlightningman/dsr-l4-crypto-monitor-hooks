import React from 'react';
import Search from "./search";
import Main from "./styled/main";

import {AppProps, AppState} from "../types/app";
import CurrencyList from "./currency-list";


class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            cryptocurrencyList: [
                {
                    name: 'DOGE',
                    price: 0
                }
            ]
        }
    }


    render() {
        return <Main>
            <Search/>
            <CurrencyList currencyList={this.state.cryptocurrencyList}/>
        </Main>
    }
}

export default App;
