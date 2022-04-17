import {CurrencyItemProps, Trend} from "../types/currency-item";
import {FC, useCallback, useEffect, useMemo, useState} from "react";
import CurrencyContainerItem from "./styled/currency/currency-container-item";
import CurrencyName from "./styled/currency/currency-name";
import CurrencyPrice from "./styled/currency/currency-price";
import CurrencyInfo from "./styled/currency/currency-info";
import CurrencyDelete from "./styled/currency/currency-delete";
import {CurrencyPrice as Price} from '../types/currency';
import {BsArrowDownRight, BsArrowUpRight, BsList} from "react-icons/bs";
import {getCryptocurrencyPrice} from "../http";

const CurrencyItem: FC<CurrencyItemProps> = ({name, onRemoveCurrency}) => {
    const [price, setPrice] = useState<Price>('(Loading...)');
    const [trend, setTrend] = useState<Trend>(Trend.NONE);

    useEffect(() => {
        update();
        const timer = setInterval(update, 5000);
        return () => clearInterval(timer)
    }, []);

    const removeFromObservables = useCallback(() => onRemoveCurrency(name), []);

    const getTrend = useCallback((oldPrice: Price, newPrice: Price): Trend => {
        if (oldPrice < newPrice) return Trend.UP
        if (oldPrice > newPrice) return Trend.DOWN
        return Trend.NONE
    }, [price]);

    const trendIcon = useMemo(() => {
        switch (trend) {
            case (Trend.UP):
                return <BsArrowUpRight color="greenyellow"/>
            case (Trend.DOWN):
                return <BsArrowDownRight color="red"/>
            case (Trend.NONE):
                return <BsList color="white"/>
            default:
                return <BsList color="white"/>
        }
    }, [trend]);

    const update = () => {
        getCryptocurrencyPrice(name)
            .then(newPrice => {
                const newTrend = getTrend(price, newPrice);
                setPrice(newPrice);
                setTrend(newTrend);
            });
    };


    return <CurrencyContainerItem>
        <CurrencyInfo>
            <CurrencyName data-testid="currency-name">{name}</CurrencyName>
            <CurrencyPrice data-testid="currency-price">${price}{trendIcon}</CurrencyPrice>
        </CurrencyInfo>
        <CurrencyDelete onClick={removeFromObservables} data-testid="currency-delete">×</CurrencyDelete>
    </CurrencyContainerItem>

}

export default CurrencyItem