import {CurrencyName} from "./currency";

export type CurrencyListOperation = (currencyName: CurrencyName) => void

export interface AppProps {

}

export interface AppState {
    observableCurrencyList: CurrencyName[]
}