const MIN_NUM = 1;
const MAX_NUM = 25;
const MIN_NUM_LIKES = 15;
const MAX_NUM_LIKES = 200;
const MIN_COMMENT = 0;
const MAX_COMMENT = 30;
const MAX_NUM_AVATAR = 6;
const MESSAGE = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
    'Michael',
    'Katya',
    'Max',
    'Irina',
    'Mary',
    'Bob',
];

const DESCRIPTION = [
    'Как круто!',
    'Я настоящий фотограф)',
    'Сегодняшний mood',
    'life...',
    'Yesterday',
];

const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};

const getRandomArrayElement = (items) => 
    items[getRandomInteger(0, items.length - 1)];

const generateRandomId = () => {
    let randomId = 0;

    return () => {
        randomId += 1;
        return randomId;
    }

};

const createIdComment = generateRandomId();


const createMessage = () => Array.from(
      {length: getRandomInteger(1, 2)},
        () => getRandomArrayElement(MESSAGE)

);

const getComments = () => ({

        id: createIdComment(),
        avatar: 'img/avatar-' + getRandomInteger(MIN_NUM, MAX_NUM_AVATAR) + '.svg',
        message: createMessage(),
        name:getRandomArrayElement(NAMES),
    
});


const createPhoto = (index) => ({
    id: index,
    url: 'photos/' + index + '.jpg',
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInteger(MIN_NUM_LIKES,MAX_NUM_LIKES),
    comments: Array.from({ length: getRandomInteger(MIN_COMMENT, MAX_COMMENT) }, getComments)

});
const arrayPhoto = Array.from({ length: MAX_NUM }, (_, index) => createPhoto(index + 1));
export {arrayPhoto};