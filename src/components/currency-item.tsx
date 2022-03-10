import {CurrencyItemProps, CurrencyItemState} from "../types/currency-item";
import React from "react";
import CurrencyContainerItem from "./styled/currency-container-item";
import CurrencyName from "./styled/currency-name";
import CurrencyPrice from "./styled/currency-price";

class CurrencyItem extends React.Component<CurrencyItemProps, CurrencyItemState> {
    render() {
        return <CurrencyContainerItem>
            <CurrencyName>{this.props.name}</CurrencyName>
            <CurrencyPrice>{this.props.price}</CurrencyPrice>
        </CurrencyContainerItem>
    }
}

export default CurrencyItem