import {getCryptocurrencyList, getCryptocurrencyPrice} from "../http";



describe(`Availability works`, () => {
    test(`BTC exists`, async () => {
        const result = await getCryptocurrencyList();

        expect(result).toBeDefined();
        expect(result).toBeInstanceOf(Array);
        expect(result).toContain('DOGE');
        expect(result).toContain('BTC');
    });
});

describe('Price requesting works', () => {
    test('BTC\'s price returns correctly', async () => {
        const result = await getCryptocurrencyPrice('BTC');
        expect(result).toBeGreaterThanOrEqual(0);
    });

    test('Non-exists cryptocurrency price equals "???"', async () => {
        const result = await getCryptocurrencyPrice('BiTiCi');
        expect(result).toBe('???');
    })
})