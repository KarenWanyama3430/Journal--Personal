import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const JournalScreen = () => {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const response = await axios.get('http://localhost:3000/journals');
        setJournals(response.data);
      } catch (error) {
        console.error('Failed to fetch journals', error);
      }
    };

    fetchJournals();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.content}</Text>
      <Text style={styles.meta}>{item.category} - {item.date}</Text>
    </View>
  );

  return (
    <FlatList
      data={journals}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  meta: {
    fontStyle: 'italic',
    marginTop: 5,
  },
});

export default JournalScreen;
