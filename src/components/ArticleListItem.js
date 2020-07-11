import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import format from 'date-fns/format';

const formatPublishedAt = (str) => {
  const date = new Date(str);

  return format(date, 'MMM dd, yyyy');
};

const ArticleListItem = ({ item, onPress, style }) => {
  const handlePress = () => {
    if (onPress) {
      onPress(item);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.item, style]}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.urlToImage }} />
        <View style={styles.headlineContainer}>
          <Text numberOfLines={3} style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.date}>
            Published on {formatPublishedAt(item.publishedAt)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  headlineContainer: {
    flex: 1,
  },
  item: {
    padding: 10,
    marginVertical: 8,
  },
  title: {
    padding: 10,
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  date: {
    paddingHorizontal: 10,
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
  },
});

export { ArticleListItem };
