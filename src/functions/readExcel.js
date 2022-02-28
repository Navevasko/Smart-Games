const XLSX = require('xlsx')

const read = (file) => {
    const excelData = XLSX.readFile(file)

    return Object.keys(excelData.Sheets).map((name) => ({
        name,
        data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
    }))
}

// console.log(read('./Jogos.xlsx'))

// read('./Jogos.xlsx').forEach((element) => {
//     console.log(element.data)
// })

module.exports = read