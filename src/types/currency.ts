export type CurrencyName = string;
export type CurrencyPrice = number | string;

export interface Currency {
    name: CurrencyName,
    price: CurrencyPrice
}