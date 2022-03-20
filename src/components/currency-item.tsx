import {CurrencyItemProps, CurrencyItemState, Trend} from "../types/currency-item";
import React from "react";
import CurrencyContainerItem from "./styled/currency/currency-container-item";
import CurrencyName from "./styled/currency/currency-name";
import CurrencyPrice from "./styled/currency/currency-price";
import CurrencyInfo from "./styled/currency/currency-info";
import CurrencyDelete from "./styled/currency/currency-delete";
import {CurrencyPrice as Price} from '../types/currency';
import {BsArrowDownRight, BsArrowUpRight, BsList} from "react-icons/bs";
import {getCryptocurrencyPrice} from "../http";

class CurrencyItem extends React.Component<CurrencyItemProps, CurrencyItemState> {
    intervalId: NodeJS.Timer | null;

    constructor(props: CurrencyItemProps) {
        super(props);

        this.state = {
            price: '(Loading...)',
            trend: Trend.NONE
        };

        this.intervalId = null;
    }

    componentDidMount() {
        this.update();
        this.intervalId = setInterval(this.update, 5000);
    }

    componentWillUnmount() {
        if (this.intervalId)
            clearInterval(this.intervalId);
    }

    static getTrend = (oldPrice: Price, newPrice: Price): Trend => {
        if (oldPrice < newPrice) return Trend.UP
        if (oldPrice > newPrice) return Trend.DOWN
        return Trend.NONE
    }

    static getIconByTrend = (trend: Trend) => {
        switch (trend) {
            case (Trend.UP):
                return <BsArrowUpRight color="greenyellow"/>
            case (Trend.DOWN):
                return <BsArrowDownRight color="red"/>
            case (Trend.NONE):
                return <BsList color="white"/>
        }
    }

    update = () => {
        getCryptocurrencyPrice(this.props.name)
            .then(price => {
                const trend = CurrencyItem.getTrend(this.state.price, price);
                this.setState({price, trend});
            });
    }

    removeFromObservables = () => {
        this.props.onRemoveCurrency(this.props.name);
    }

    render() {
        const trendIcon = CurrencyItem.getIconByTrend(this.state.trend);

        return <CurrencyContainerItem>
            <CurrencyInfo>
                <CurrencyName data-testid="currency-name">{this.props.name}</CurrencyName>
                <CurrencyPrice data-testid="currency-price">${this.state.price}{trendIcon}</CurrencyPrice>
            </CurrencyInfo>
            <CurrencyDelete onClick={this.removeFromObservables} data-testid="currency-delete">×</CurrencyDelete>
        </CurrencyContainerItem>
    }
}

export default CurrencyItem