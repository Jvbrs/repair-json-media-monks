const fs = require('fs');

function readJson(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Erro ao ler o arquivo ${filename}: ${error.message}`);
        return null;
    }
}

function fixCharacters(data) {
    return data.map(record => {
        // Replace 'æ' with 'a' and 'ø' with 'o'
        if (record.nome) {
            record.nome = record.nome.replace(/æ/g, 'a').replace(/ø/g, 'o');
        }
        if (record.marca) {
            record.marca = record.marca.replace(/æ/g, 'a').replace(/ø/g, 'o');
        }

        return record;
    });
}

function fixNumbers(data) {
    return data.map(record => {
        if (typeof record.vendas === "string") {
            record.vendas = parseFloat(record.vendas.replace(',', '.'));
        }
        return record;
    });
}

function correctDb(inputFileName, outputFileName) {
    const corruptedData = readJson(inputFileName);

    if (!corruptedData) {
        return;
    }

    const fixedCharacters = fixCharacters(corruptedData);
    const fixedSalesValues = fixNumbers(fixedCharacters);

    exportFile(outputFileName, fixedSalesValues);
}

function exportFile(outputFile, data) {
    try {
        fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
        console.log(`Arquivo exportado com sucesso ${outputFile}`);
    } catch (error) {
        console.log(`Erro ao exportar o arquivo ${outputFile}: ${error.message}`);
    }
}


const inputFileName1 = 'broken_database_1.json';
const outputFileName1 = 'fixed_database_1.json';

correctDb(inputFileName1, outputFileName1);

const inputFileName2 = 'broken_database_2.json';
const outputFileName2 = 'fixed_database_2.json';

correctDb(inputFileName2, outputFileName2);
