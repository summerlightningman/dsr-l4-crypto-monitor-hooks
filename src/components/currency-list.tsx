import {CurrencyListProps, CurrencyListState} from "../types/currency-list";
import React from "react";
import CurrencyContainer from "./styled/currency-container";
import CurrencyItem from "./currency-item";

class CurrencyList extends React.Component<CurrencyListProps, CurrencyListState> {
    render() {
        return <CurrencyContainer>
            {this.props.currencyList.map(currencyName =>
                <CurrencyItem name={currencyName} key={currencyName} onRemoveCurrency={this.props.onRemoveCurrency}/>)}
        </CurrencyContainer>
    }
}

export default CurrencyList