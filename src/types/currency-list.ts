import {CurrencyName} from "./currency";
import {CurrencyListOperation} from "./app";

export type TCurrencyList = CurrencyName[];

export interface CurrencyListProps {
    currencyList: TCurrencyList
    onRemoveCurrency: CurrencyListOperation
}
