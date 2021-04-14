//JOHNATHON MC GRORY S00190873

import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
//should include the name in the message
  it('should return one of the currencies USD, GDP, or EUR', () => {
//Check that return from getCurrencies function contains the word USD, GDP, or EUR
    expect(getCurrencies()).toContain('USD'&& "GDP" && 'EUR' && 'YEN');
  });
});
