import React from 'react';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';

const TextView = styled.View`
    flex-direction: row;
`;

const FieldName = styled.Text`
    font-weight: bold;
    font-size: 16px;
    margin: 2px;
`;

const Text = styled.Text`
    margin: 2px;
    font-size: 16px;
`;

const NestedView = styled.View`
border: 2px solid #2a64e8;
margin: 5px;
border-radius: 10px;
`;

const NestedDescription = styled.View`
margin: 0px 10px;
flex-direction: row;
`;

const DetailsList = ({ details }) => {
  const capitalize = (text) => text?.toLowerCase().charAt(0).toUpperCase() + text.slice(1);

  const renderList = (keys) => (
    <FlatList
      data={keys}
      renderItem={({ item }) => {
        console.log(item);
        if (typeof details[item] === 'string') {
          return (
            <TextView>
              <FieldName>
                {capitalize(item)}
                :
              </FieldName>
              <Text>{capitalize(details[item])}</Text>
            </TextView>
          );
        }
        if (typeof details[item] === 'object') {
          const { sigla, descricao } = details[item];
          return (
            <NestedView>
              <FieldName>
                {item}
                :
              </FieldName>
              <NestedDescription>
                <FieldName>
                  Sigla:
                </FieldName>
                <Text>{capitalize(sigla)}</Text>
              </NestedDescription>
              <NestedDescription>
                <FieldName>
                  Descrição:
                </FieldName>
                <Text>{capitalize(descricao)}</Text>
              </NestedDescription>
            </NestedView>
          );
        }
      }}
      keyExtractor={(item) => item}
    />
  );

  return (
    <ScrollView horizontal>
      {renderList(Object.keys(details))}
    </ScrollView>

  );
};

export default DetailsList;
