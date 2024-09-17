const fs = require('fs');

// Save data to JSON file
function saveData(data, path='data.json') {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

// Load data from JSON file
function loadData(path='data.json') {
    try {
        return JSON.parse(fs.readFileSync(path, 'utf8'));
    } catch (error) {
        if (error.code === 'ENOENT') {
            return [];
        } else {
            throw error;
        }
    }
}

module.exports = { saveData, loadData };
