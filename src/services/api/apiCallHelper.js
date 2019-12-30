import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
});

/*const message = {
  noPage: 'There is nothing here',
  noCharacter: 'Character not found',
  noLocation: 'Location not found',
  badParam: 'Hey! that parameter is not allowed, try with a number instead ;)',
  badArray: 'Bad... bad array :/'
};

const collection = {
  exclude: '-_id -author -__v -edited',
  limit: 20,
  queries: {
    character: ['name', 'status', 'species', 'type', 'gender'],
    location: ['name', 'dimension', 'type']
  }
};*/

export default instance;