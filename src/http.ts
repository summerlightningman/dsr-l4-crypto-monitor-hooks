import {API_KEY} from "./constants";
import {CurrencyName} from "./types/currency";

// export const getCurrencyDict = async () =>
//     fetch(`https://min-api.cryptocompare.com/data/all/coinlist?api_key=${API_KEY}`)
//         .then(resp => resp.json())
//         .then(resp => resp['Data'])
//         .then(data => Object.keys(data).reduce((acc: CurrencyDict, val: string) => ({
//             ...acc,
//             [data[val].CoinName]: val
//         }), {}));

export const getCryptocurrencyPrice = async (currencyName: CurrencyName, unit = 'USD') =>
    fetch(`https://min-api.cryptocompare.com/data/price?fsym=${currencyName}&tsyms=${unit}&api_key=${API_KEY}`)
        .then(_ => _.json())
        .then(_ => _[unit] || '???');

export const isCryptocurrencyAvailable = async (currencyName: CurrencyName) =>
    fetch(`https://min-api.cryptocompare.com/data/blockchain/list?api_key=${API_KEY}`)
        .then(_ => _.json())
        .then(resp => currencyName in resp.Data)
