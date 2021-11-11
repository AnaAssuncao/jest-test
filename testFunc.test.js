// import funcBModule from './funcB.js';
// import { funcA } from './funcA.js';
import {jest} from '@jest/globals'
// const jest = require("@jest/globals")
// import a from "./test1.js"

const a = {
  funcB: function(){
    return 'original';
  },
  funcA:function(){
    return this.funcB();
  }
}

describe('helper', () => {

  test('test funcB', () => {
    expect(a.funcB()).toBe('original');  // Success!
  });

  test('test funcA', () => {
    const spy = jest.spyOn(a, 'funcB');
    spy.mockReturnValue('mocked');

    expect(a.funcA()).toBe('mocked');  // Success!

    spy.mockRestore();
  });

  // test('test funcA', () => {

  //   const mockPlaySoundFile = jest.fn("mocked");
  //   jest.mock('./funcB.js', () => {
  //     return jest.fn().mockImplementation(() => {
  //       return {funcB: mockPlaySoundFile};
  //     });
  //   });
  //   expect(funcA()).toBe('mocked');  // Success!
  //   spy.mockRestore();
  // });
});