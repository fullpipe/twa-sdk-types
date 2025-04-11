import { Greeter } from '../src/index';
import { expect } from 'chai';

describe('Greeter tests', () => {
  it('greets you', () => {
    const greeter = new Greeter();

    expect(greeter.greet('nobody')).to.equal('Hello nobody');
  });
});
