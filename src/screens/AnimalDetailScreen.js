import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import DetailsList from '../Library/DetailsList';

const Container = styled.View`
flex: 1;
`;

const AnimalDetailScreen = ({ navigation }) => {
  const animal = navigation.getParam('animal');

  console.log(animal);
  return (
    <Container>
      <DetailsList details={animal} />
    </Container>
  );
};

AnimalDetailScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

export default AnimalDetailScreen;
