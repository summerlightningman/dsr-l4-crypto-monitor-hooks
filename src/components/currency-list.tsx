import {CurrencyListProps, CurrencyListState} from "../types/currency-list";
import React from "react";
import CurrencyContainer from "./styled/currency-container";
import CurrencyItem from "./currency-item";

class CurrencyList extends React.Component<CurrencyListProps, CurrencyListState> {
    constructor(props: CurrencyListProps) {
        super(props);

        this.state = {
            currencyList: [{
                name: 'Hello, world!',
                price: 99.99
            }, {
                name: '#StopRussia',
                price: 99999999999
            }, {
                name: '#StopWar',
                price: 999999999999
            }]
        }
    }

    render() {
        return <CurrencyContainer>
            {this.state.currencyList.map(currency => <CurrencyItem {...currency} />)}
        </CurrencyContainer>
    }
}

export default CurrencyList