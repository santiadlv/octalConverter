var assert = require('assert');
var octalConverterFunctions = require('../octalConverter');

describe('givenDecimal1WhenConvertThenOctal1', function () {
    it('convert(1) = 1', function() {
        //Given
        var a = 1;
        var expectedResult = 1;

        // When
        var actualResult = octalConverterFunctions.convert(a);

        // Then
        assert.strictEqual(expectedResult, actualResult);
    })
})

describe('givenDecimal2WhenConvertThenOctal2', function () {
    it('convert(2) = 2', function() {
        //Given
        var a = 2;
        var expectedResult = 2;

        // When
        var actualResult = octalConverterFunctions.convert(a);

        // Then
        assert.strictEqual(expectedResult, actualResult);
    })
})

describe('givenDecimal8WhenConvertThenOctal10', function () {
    it('convert(8) = 10', function() {
        //Given
        var a = 8;
        var expectedResult = 10;

        // When
        var actualResult = octalConverterFunctions.convert(a);

        // Then
        assert.strictEqual(expectedResult, actualResult);
    })
})

describe('givenDecimal95WhenConvertThenOctal137', function () {
    it('convert(95) = 137', function() {
        //Given
        var a = 95;
        var expectedResult = 137;

        // When
        var actualResult = octalConverterFunctions.convert(a);

        // Then
        assert.strictEqual(expectedResult, actualResult);
    })
})

describe('givenDecimal2048WhenConvertThenOctal4000', function () {
    it('convert(2048) = 4000', function() {
        //Given
        var a = 2048;
        var expectedResult = 4000;

        // When
        var actualResult = octalConverterFunctions.convert(a);

        // Then
        assert.strictEqual(expectedResult, actualResult);
    })
})
