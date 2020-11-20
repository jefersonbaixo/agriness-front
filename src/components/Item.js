import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DetailsList from '../Library/DetailsList';

const Container = styled.View`
    border: 3px solid #2a64e0;
    margin: 6px;
    padding: 2px;
    border-radius: 5px;
    background-color: #a1b1ff;
`;

const Item = ({ animal }) => (
  <Container>
    <DetailsList details={animal} />
  </Container>
);

Item.propTypes = {
  animal: PropTypes.shape({}).isRequired,
};

export default Item;
