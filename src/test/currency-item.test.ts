import CurrencyItem from "../components/currency-item";
import {Trend} from "../types/currency-item";

describe('Trends gets correctly', () => {
    const testCases: Array<[string, number, number, Trend]> = [
        ['Price increases when old < new', 40, 50, Trend.UP],
        ['Price not changing when old = new', 40, 40, Trend.NONE],
        ['Price decreases when old > new', 50, 40, Trend.DOWN]
    ];

    testCases.forEach(([caption, oldPrice, newPrice, trend]) =>
        test(caption, () => expect(CurrencyItem.getTrend(oldPrice, newPrice)).toBe(trend))
    );
});

describe('Trend icons gets correctly', () => {
    const testCases: Array<[string, Trend, string]> = [
        ['Arrow up when price increases', Trend.UP, 'BsArrowUpRight'],
        ['Equal icon when price not changes', Trend.NONE, 'BsList'],
        ['Arrow down when price decreases', Trend.DOWN, 'BsArrowDownRight']
    ];

    testCases.forEach(([caption, trend, name]) =>
        test(caption, () => {
            const result = CurrencyItem.getIconByTrend(trend).type.name
            expect(result).toBe(name);
        })
    );
})