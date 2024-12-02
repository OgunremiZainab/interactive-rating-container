const result = document.getElementById('result-pg');
const value = localStorage.getItem('value');
result.textContent = `You selected ${value} out of five`;
