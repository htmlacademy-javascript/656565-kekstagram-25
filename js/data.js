import { getRandomNumber} from './util.js';

const description = ['Я отстаю!!!','Скоро лето, скоро вэйк','горы и сноуборд','прыгаю с парашютом','Работаю работу','учу js','мой котЭ туповат'];
const userName = ['Абрам','Аваз','Август','Авдей','Автандил','Адам','Адис','Адольф','Адриан'];
const message = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const getRandomArrayElement = (element) => element[getRandomNumber(0, element.length - 1)];

const avatar = Array.from({length: 6}, (_, i) => `img/avatar-${i+1}.svg`);

const comment = (userId) => ({
  id : userId,
  avatar : getRandomArrayElement(avatar),
  name : getRandomArrayElement(userName),
  message : getRandomArrayElement(message)
});

const url = Array.from({length: 25}, (_, i) => `photos/${i+1}.jpg`);

const createObject = (id) => ({
  id : id,
  url : getRandomArrayElement(url),
  description : getRandomArrayElement(description),
  likes : getRandomNumber(15, 200),
  comments : Array.from({length: getRandomNumber(0,30)}, (_, i) => comment(i+1))
});

const userDataArray = Array.from({length: 25}, (_, i) => createObject(i+1));

export {description, userName, message, getRandomArrayElement, userDataArray, avatar, comment, url, createObject};
