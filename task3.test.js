const task3 = require('./task3')

test("test ceiling" , () => {
    expect(task3.ceiling(2.7)).toBe(3);   
});

test("test round" , () => {
    expect(task3.round(9.1)).toBe(9);   
});

test("test power" , () => {
    expect(task3.power(2,2)).toBe(4);   
});


test("test power" , () => {
    expect(task3.power(2,1)).toBe(2);   
});


test("test power" , () => {
    expect(task3.power(5,2)).toBe(25);   
});
