import {CurrencyItemProps, CurrencyItemState} from "../types/currency-item";
import React from "react";
import CurrencyContainerItem from "./styled/currency-container-item";
import CurrencyName from "./styled/currency-name";
import CurrencyPrice from "./styled/currency-price";
import CurrencyInfo from "./styled/currency-info";
import CurrencyDelete from "./styled/currency-delete";
import {getCryptocurrencyPrice} from "../http";

class CurrencyItem extends React.Component<CurrencyItemProps, CurrencyItemState> {
    constructor(props: CurrencyItemProps) {
        super(props);

        this.state = {
            price: '???'
        };
        setInterval(this.update, 5000);
        this.update();
    }

    update = () => {
        getCryptocurrencyPrice(this.props.name).then(price => this.setState({price}));
    }

    render() {
        return <CurrencyContainerItem>
            <CurrencyInfo>
                <CurrencyName>{this.props.name}</CurrencyName>
                <CurrencyPrice>${this.state.price}</CurrencyPrice>
            </CurrencyInfo>
            <CurrencyDelete>×</CurrencyDelete>
        </CurrencyContainerItem>
    }
}

export default CurrencyItem