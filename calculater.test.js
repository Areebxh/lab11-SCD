const calculater = require('./calculater')



test("Test Case 1", ()=>{
    expect(calculater.sum(1,2)).toBe(3)
});


test("Test Case 2", ()=>{
    expect(calculater.multiply(4,2)).toBe(8)
});

test("Test Case 3", ()=>{
    expect(calculater.subtract(2,2)).toBe(0)
});

test("Test Case 4", ()=>{
    expect(calculater.divide(2,2)).toBe(1)
});

test("Test Case 5", ()=>{
    expect(calculater.divide(6,2)).toBe(3)
});

test("Test Case 3", ()=>{
    expect(calculater.subtract(2,2)).toBe(0)
});