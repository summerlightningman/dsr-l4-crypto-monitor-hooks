import {CurrencyName} from "./currency";
import {CurrencyListOperation} from "./app";

export interface CurrencyListProps {
    currencyList: CurrencyName[]
    onRemoveCurrency: CurrencyListOperation
}

export interface CurrencyListState {

}