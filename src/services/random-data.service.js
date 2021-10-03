import { ObjectId } from 'bson';
import RandExp from 'randexp';
import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';

export  {
    getUUID,
    getMongoId,
    getRandomId,
    getRandomInt,
    getRandomDec,
    getRandomBoolean,
    getRandomDate,
    getRandomColor,
    getRandomOption,
    getRandomName,
    getRandomAddress,
    getRandomAnimal,
    getRandomCommerceValue
}

function getUUID() {
    return uuidv4();
}

function getMongoId() {
    const id  = new ObjectId();
    return id.toHexString();
}

function getRandomId(pattern, length = 10, prefix = '', suffix = '') {
    const rand = new RandExp(`[${pattern}]{${length}}`).gen();
    return prefix + rand + suffix;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomDec(min, max, precision = 15) {
    const random = Math.random() * (max - min) + min;
    return +random.toFixed(precision);
}

function getRandomBoolean(truePercentage = 50) {
    return Math.random() < (truePercentage / 100);
}

function getRandomDate(from, to, format = 'date') {
    const date = new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
    switch (format) {
        case 'utc':
            return date.toUTCString();
        case 'iso':
            return date.toISOString();
        case 'timestamp':
            return date.getTime();
        case 'date':
        default:
            return date;
    }
}

function getRandomColor(format) {
    switch (format) {
        case 'rgb':
            return `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
        case 'hsl':
            return `hsl(${getRandomInt(1, 360)}, ${getRandomInt(0, 100)}%, ${getRandomInt(0, 100)}%)`;
        case 'hex':
        default:
            return ('#' + Math.floor(Math.random()*16777215).toString(16)).toUpperCase();
    }
}

function getRandomOption(options) {
    return options[Math.floor(Math.random() * options.length)];
}
/// TODO: combine all these to getRandomFakerValue(department, type, locale = 'en')
function getRandomName(nameType, locale = 'en') {
    faker.setLocale(locale);
    return faker.name[nameType]();
}

function getRandomAddress(addressType, locale = 'en') {
    faker.setLocale(locale);
    return faker.address[addressType]();
}

function getRandomAnimal(animalType) {
    return faker.animal[animalType]();
}

function getRandomCommerceValue(type) {
    return faker.commerce[type]();
}