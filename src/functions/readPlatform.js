const readPlatform = (element) => {

    var id = 0

    switch(element) {
        case 'PS4': 
            id = 6
        break;

        case 'PS3':
            id = 7
        break;

        case 'PS2':
            id = 8
        break;

        case 'XBoxOne':
            id = 9 
        break;

        case 'XBOX':
            id = 9
        break;

        case 'Xbox':
            id = 9
        break;
        
        case 'PC':
            id = 10 
        break;

        case 'Switch':
            id = 11 
        break;

        case 'WiiU':
            id = 12
        break;
    }

    return id
}

const readStore = (element) => {

    var id = 0

    switch(element) {
        case 'Loja Tamboré': 
            id = 3
        break;

        case 'Loja tambóre':
            id = 3
        break;

        case 'Loja Iguatemi':
            id = 1
        break;

        case 'Loja União':
            id = 2
        break;
    }

    return id
}

module.exports = {readPlatform, readStore}