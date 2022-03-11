import type {CurrencyName, CurrencyPrice} from "./currency";

export interface CurrencyItemProps {
    name: CurrencyName
}

export interface CurrencyItemState {
    price: CurrencyPrice
}