//import...from helyett:
const preschoolAdd = require("./preSchoolAdd");
const check = require("./mytestlib");


check(preschoolAdd(3,2), 5, "10-nél kisebb egész szám eredménynél megkapjuk a számot");
check(preschoolAdd(5.3,2), 7, "10-nél kisebb tört számnál lefele kerekít");
check(preschoolAdd(5,7), "sok", "10 feletti számnál azt írja ki, hogy sok");
check(preschoolAdd(5,5), 10, "Tíznél még 10-et ír ki");
check(preschoolAdd(5,-7), 0, "Negatív számnál nullát kapunk");


test('10-nél kisebb egész szám eredménynél megkapjuk a számot', () => {
  expect(preschoolAdd(3, 2)).toBe(5);
});