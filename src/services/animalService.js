import api from './api';

export const getAnimals = async () => {
  const response = await api.get('/').catch((err) => {
    console.log(err);
  });
  return response;
};

export const getAnimalDetail = async () => {
  console.log('test');
};
