function preschoolAdd (n1, n2) {
  const number = n1 + n2;
  if (number < 0) return 0;
  if (number >10) return "sok";
  return Math.floor(number);
}

// export default helyett:
module.exports = preschoolAdd;

