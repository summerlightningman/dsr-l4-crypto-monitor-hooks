import type {CurrencyName} from "./currency";
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
