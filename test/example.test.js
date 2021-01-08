// IMPORT MODULES under test here:
import { sumResult, subResult, divResult, multResult } from '../mathUtil.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('should return 7 when given 3 and 4', (expect) => {
    const expected = 7;
    const actual = sumResult(3, 4);
    expect.equal(actual, expected);
});


test('should return 3 when given 7 and -4', (expect) => {
    const expected = 3;
    const actual = sumResult(7, -4);
    expect.equal(actual, expected);
});

test('should return -5 when given 10 and 15', (expect) => {
    const expected = -5;
    const actual = subResult(10, 15);
    expect.equal(actual, expected);
});

test('should return 2 when given 8 and 6', (expect) => {
    const expected = 2;
    const actual = subResult(8, 6);
    expect.equal(actual, expected);
});

test('should return 2.5 when given 10 and 4', (expect) => {
    const expected = 2.5;
    const actual = divResult(10, 4);
    expect.equal(actual, expected);
});

test('should return 0.5 when given 4 and 8', (expect) => {
    const expected = 0.5;
    const actual = divResult(4, 8);
    expect.equal(actual, expected);
});

test('should return 14 when given 7 and 2', (expect) => {
    const expected = 14;
    const actual = multResult(7, 2);
    expect.equal(actual, expected);
});

test('should return 3 when given .5 and 6', (expect) => {
    const expected = 3;
    const actual = multResult(.5, 6);
    expect.equal(actual, expected);
});
