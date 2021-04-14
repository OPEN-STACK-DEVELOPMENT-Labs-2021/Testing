//JOHNATHON MC GRORY S00190873

import { greet } from './greet';

describe('greet', () => {
//should include the name in the message
  it('should include the name in the message', () => {
//Check that return from greet function contains the word Frank
    expect(greet('Frank')).toContain('Frank');
  });
});
