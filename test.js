test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("5 dollars should be 532.9 dollars", function(){
    const { fromDollarToYen } = require('./app.js')

     expect(fromDollarToYen(5)).toBe(532.9166666666667); 
})

test("500 yens should be 3.127443315089914 pounds", function(){
    const { fromYenToPound } = require('./app.js')

     expect(fromYenToPound(500)).toBe(3.127443315089914); 
})