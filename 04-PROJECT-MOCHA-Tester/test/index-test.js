const assert = require('assert');
const Rooster = require('../index');

describe ('Rooster', () => {
    describe ('announceDawn', () => {
        it('return a morning rooster call', () => {
            // setup
            const expected  = 'moo!';
            // exercise
            const result = Rooster.announceDawn();
            // verify
            assert.strictEqual(result, expected);

        });
    }); // announceDawn 

    describe ('timeAtDawn', () => {
        it('returns its argument as a string', () => {
            // setup
            const inputNumber = '10';
            // exercise
            const result = Rooster.timeAtDawn(10); 
            // verify
            assert.strictEqual(inputNumber, result);  
        })
    }) // timeAtDawn

    describe ('timeAtDawn', () => {
        it('throws an error if passed a number less than 0', () => {
            // setup
            const hour = -1
            // exercise and verify
            assert.throws(
                () => {
                    Rooster.timeAtDawn(hour);
                },
                RangeError
            );
        }) // it -1
        
        it('throws an error if passed a number greater than 23', ()=> {
            // setup
            const hour = 24;
            // exercise and verify 
            assert.throws(
                () => {
                    Rooster.timeAtDawn(hour);
                }, 
                RangeError
            );
        }) // it 24 
    })
});

