const XLSX = require('xlsx'); // Import the SheetJS library

// Load the Excel file
const workbook = XLSX.readFile('F:/pfe/ferst.xlsx');

// Choose the sheet you want to work with (e.g., the first sheet)
const sheetName = workbook.SheetNames[0];

// Parse the data as JSON
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Now, 'data' contains your Excel data as an array of JavaScript objects
console.log(data);
  