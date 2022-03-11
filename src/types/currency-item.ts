import type {CurrencyName, CurrencyPrice} from "./currency";
import {CurrencyListOperation} from "./app";

export interface CurrencyItemProps {
    name: CurrencyName,
    onRemoveCurrency: CurrencyListOperation
}

export interface CurrencyItemState {
    price: CurrencyPrice
}