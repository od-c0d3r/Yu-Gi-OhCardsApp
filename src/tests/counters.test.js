/**
 * @jest-environment jsdom
 */

 import commentsCounter from '../modules/Counters.js';
 import { arrayLength } from '../utl/__mocks__/funcs.js';
 import { fakeCards, fakeComments } from '../utl/mockData.js';
 
 jest.mock('../utl/funcs.js');

 describe('Unit Tests', () => {
   describe('commentsCounter()', () => {
     test('returns number of comments per card', () => {
       expect(commentsCounter(fakeComments)).toEqual(2);
     });
   });
 });
 
test('Check if arrayLength function is present', () => {
  expect(arrayLength).toBeDefined();
});

test('Check if arrayLength function calculates the length', () => {
  expect(arrayLength(fakeCards)).toBe(5);
});

test('Check if arrayLength function reduces the length to 4 after splice', () => {
  expect(arrayLength(fakeCards.splice(0, 4))).toBe(4);
});