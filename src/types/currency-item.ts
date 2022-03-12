import type {CurrencyName, CurrencyPrice} from "./currency";
import {CurrencyListOperation} from "./app";

export enum Trend {
    UP = 'UP',
    DOWN = 'DOWN',
    NONE = 'NONE'
}

export interface CurrencyItemProps {
    name: CurrencyName,
    onRemoveCurrency: CurrencyListOperation
}

export interface CurrencyItemState {
    price: CurrencyPrice,
    trend: Trend
}