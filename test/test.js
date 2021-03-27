var assert = require('assert');
var javascritFunctions = require('../javascriptFunctions');

describe('givenTwoIntegersWhenSumThenSuccess', function () {
    it('sum(1, 2) = 3', function() {
        //Given
        var a = 1;
        var b = 2;
        var expectedResult = 3;

        // When
        var actualResult = javascritFunctions.sum(a, b);

        // Then
        assert.strictEqual(expectedResult, actualResult);
    })
})
