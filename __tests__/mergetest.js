const { merge, mergeSort } = require('../mergesort');

describe('mergesort', () => {
    test('test merge', () => {
        expect(merge([2, 3], [1, 2])).toEqual([1, 2, 2, 3]);
    });

    test('test merge simple', () => {
        expect(merge([1], [2])).toEqual([1, 2]);
    });

    test('test merge complex', () => {
        expect(merge([1, 2, 6, 7, 9], [3, 4, 5, 8])).toEqual([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
        ]);
    });

    test('test mergeSort', () => {
        expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
    });

    test('test mergeSort hard', () => {
        expect(mergeSort([3, 6, 4, 7, 5, 9, 2, 7, 1])).toEqual([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            7,
            9,
        ]);
    });
});
