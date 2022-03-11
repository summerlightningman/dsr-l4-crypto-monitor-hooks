import React from 'react';
import Search from "./search";
import Main from "./styled/main";

import {AppProps, AppState} from "../types/app";
import CurrencyList from "./currency-list";
import {CurrencyName} from "../types/currency";


class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            observableCurrencyList: ['DOGE']
        }

        this.addObservableCurrency = this.addObservableCurrency.bind(this);
    }

    addObservableCurrency(name: CurrencyName) {
        this.setState(state => ({
            observableCurrencyList: [...state.observableCurrencyList, name]
        }));
    }

    render() {
        return <Main>
            <Search onAddCurrency={this.addObservableCurrency}/>
            <CurrencyList currencyList={this.state.observableCurrencyList}/>
        </Main>
    }
}

export default App;
