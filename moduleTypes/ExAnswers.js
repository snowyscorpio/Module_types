const fs = require('fs'); 
const path = require('path');

const dirPath = path.join(__dirname, '/text');


const inputFiles = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt', 'file6.txt', 'file7.txt', 'file8.txt', 'file9.txt', 'file10.txt'];


let textOut = '';


for (let i = 0; i < inputFiles.length; i++) {
  const filePath = path.join(dirPath, inputFiles[i]);

  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const lines = fileContent.split('\r\n');

  const numLinesToCopy = i + 1;

  const linesToCopy = lines.slice(0, numLinesToCopy)
    .filter(line => line.trim() !== ''); // Filtering out empty lines

  textOut += linesToCopy.join('\r\n') + '\r\n';
}

const outputFilePath = path.join(dirPath, 'output.txt');
fs.writeFileSync(outputFilePath, textOut);

console.log('File has been created successfully!');
