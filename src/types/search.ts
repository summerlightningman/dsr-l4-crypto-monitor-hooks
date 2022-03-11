import {CurrencyName} from "./currency";

export type SearchText = string;

export interface SearchProps {
    onAddCurrency: (currencyName: CurrencyName) => void,
}

export interface SearchState {
    value: SearchText
}