import {isCryptocurrencyAvailable} from "../http";

describe(`Cryptocurrency availability works`, () => {
   test(`BTC exists`, () => {
       isCryptocurrencyAvailable('BTC')
           .then(resp => expect(resp).toBeTruthy());
   });

   test('Bitcoin not exists', () => {
       isCryptocurrencyAvailable('Bitcoin')
           .then(resp => expect(resp).toBeFalsy());
   })
});