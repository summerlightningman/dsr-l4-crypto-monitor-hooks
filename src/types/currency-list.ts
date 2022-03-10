import {Currency} from "./currency";

export type CurrencyList = Currency[];

export interface CurrencyListProps {

}

export interface CurrencyListState {
    currencyList: CurrencyList
}