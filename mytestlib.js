const check = (result, expected, testCaseDescription) => {
  console.log(`${testCaseDescription}: result:${result}, expected:${expected} ====>  ${result===expected ? "succes" : "error"}`);
}

module.exports = check;