import {API_KEY} from "./constants";

// export const getCurrencyDict = async () =>
//     fetch(`https://min-api.cryptocompare.com/data/all/coinlist?api_key=${API_KEY}`)
//         .then(resp => resp.json())
//         .then(resp => resp['Data'])
//         .then(data => Object.keys(data).reduce((acc: CurrencyDict, val: string) => ({
//             ...acc,
//             [data[val].CoinName]: val
//         }), {}));

export const getCryptocurrencyPrice = async (currencyName: string) =>
    fetch(`https://min-api.cryptocompare.com/data/price?fsym=${currencyName}&tsyms=RUB&api_key=${API_KEY}`)
        .then(_ => _.json());