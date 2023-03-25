import React from 'react';
import {sumArray, minEvenNumber} from "./util/finctions"
test('test function sumArray', () => {
    const array: number[] = [1 ,2 ,3];
    expect(sumArray(array)).toEqual(6);
})

test('minEvenNumber', () => {
    const array: number[] = [1 ,2 ,3, 7, 8, 9, 11, -7,-8];
    expect(minEvenNumber(array)).toEqual(-8);
}) 

test('minEvenNumber undefined', () => {
    const array: number[] = [1  ,3, 7,  9, 11, -7];
    expect(minEvenNumber(array)).toEqual(undefined);
}) 