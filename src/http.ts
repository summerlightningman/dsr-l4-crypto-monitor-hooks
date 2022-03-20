import {API_KEY} from "./constants";
import {CurrencyName} from "./types/currency";

export const getCryptocurrencyPrice = async (currencyName: CurrencyName, unit = 'USD') =>
    fetch(`https://min-api.cryptocompare.com/data/price?fsym=${currencyName}&tsyms=${unit}&api_key=${API_KEY}`)
        .then(_ => _.json())
        .then(_ => _[unit] || '???');

export const getCryptocurrencyList = async () =>
    fetch(`https://min-api.cryptocompare.com/data/blockchain/list?api_key=${API_KEY}`)
        .then(_ => _.json())
        .then(resp => Object.keys(resp.Data));
