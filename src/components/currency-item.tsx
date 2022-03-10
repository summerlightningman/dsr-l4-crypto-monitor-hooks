import {CurrencyItemProps, CurrencyItemState} from "../types/currency-item";
import React from "react";
import CurrencyContainerItem from "./styled/currency-container-item";
import CurrencyName from "./styled/currency-name";
import CurrencyPrice from "./styled/currency-price";
import CurrencyInfo from "./styled/currency-info";
import CurrencyDelete from "./styled/currency-delete";

class CurrencyItem extends React.Component<CurrencyItemProps, CurrencyItemState> {
    render() {
        return <CurrencyContainerItem>
            <CurrencyInfo>
                <CurrencyName>{this.props.name}</CurrencyName>
                <CurrencyPrice>{this.props.price}</CurrencyPrice>
            </CurrencyInfo>
            <CurrencyDelete>×</CurrencyDelete>
        </CurrencyContainerItem>
    }
}

export default CurrencyItem