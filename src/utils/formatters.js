const validateNumber = (val) => {
  if (!val) return 1; 
  return +toString(val).replace(/[^1-9.]/g, '') || 1 ;
}

const format = (num) => typeof num === 'number' ? +num.toFixed(2) : num;

export { validateNumber, format }