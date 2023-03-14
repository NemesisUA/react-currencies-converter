export const getCountryCode = (arr, currency) => {
  if (!arr || !currency || arr.lenth === 0) return 'xx';

  switch (currency) {
    case 'AUD': return 'au';
    case 'EUR': return 'eu';
    case 'USD': return 'us';
    case 'GBP': return 'gb';
  }

  let  res = arr.filter(item => item.currencyCode === currency)[0]?.countryCode || 'ua';  
  
  return res.toLowerCase();   
}