const outputElement = document.getElementById('output_csv');

function getCsvData(dataPath) {
 const request = new XMLHttpRequest();
 request.addEventListener('load', (event) => {
  const response = event.target.responseText;
  outputElement.textContent = response;
 });
 request.open('GET', dataPath, true);
 request.send();
}

getCsvData('./example.csv');
