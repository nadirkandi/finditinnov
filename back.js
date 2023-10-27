// Data for the bar chart
var data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'Sample Data',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'red', 'blue', 'yellow', 'green', 'purple', 'orange'
            ]
        }
    ]
};

// Chart configuration
var config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Create a chart
var ctx = document.getElementById('Chart').getContext('2d');
var myChart = new Chart(ctx, config);

const XLSX = require('xlsx'); // Import the SheetJS library

// Load the Excel file
const workbook = XLSX.readFile('F:/pfe/ferst.xlsx');

// Choose the sheet you want to work with (e.g., the first sheet)
const sheetName = workbook.SheetNames[0];

// Parse the data as JSON
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Now, 'data' contains your Excel data as an array of JavaScript objects
console.log(data);