import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Item from '../components/Item';
import { getAnimals } from '../services/animalService';

const Container = styled.View`
flex: 1;
/* background-color: #2b2b2b */
`;

const HomeScreen = ({ navigation }) => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getAnimals().then((response) => {
      setAnimals(response.data);
    }).catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <FlatList
        data={animals}
        renderItem={({ item }) => {
          const { nome, localizacao, tipoAnimal } = item;
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('AnimalDetail', { animal: item })}
            >
              <Item animal={{ nome, localizacao, tipo: tipoAnimal }} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default HomeScreen;
