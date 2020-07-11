import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FavoriteIcon } from '../components/FavoriteIcon';
import { setItem, getItem } from '../utils/asyncStorage';
import { FAVORITES_KEY } from '../utils/constants';

const formatAuthor = (v) => (v ? `By ${v}` : 'Author Unknown');

const ArticleScreen = (props) => {
  const [isFavorite, updateFavorite] = useState(false);
  const { title, author, description, url } = props;

  useEffect(() => {
    const checkForFavorite = async () => {
      try {
        const result = await getItem(FAVORITES_KEY);

        if (!result) {
          // do nothing, since we initialized isFavorite to false
          return;
        }

        const foundFavorite = !!result.find((u) => u === url);

        updateFavorite(foundFavorite);
      } catch (error) {
        console.error('error: ', error);
        // TODO - handle
      }
    };

    checkForFavorite();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleFavoritePress = async () => {
    try {
      const favorites = await getItem('favorites');
      // if it's currently false, add it to async storage
      if (!isFavorite) {
        const newFavorites = favorites ? [url, ...favorites] : [url];
        setItem(FAVORITES_KEY, newFavorites);
      } else {
        // otherwise, remove it from async storage
        const filteredFavorites = favorites.filter((f) => f !== url);
        setItem(FAVORITES_KEY, filteredFavorites);
      }

      updateFavorite(!isFavorite);
    } catch (error) {
      console.error('error: ', error);
      // TODO - handle
    }
  };

  const iconName = isFavorite ? 'favorite' : 'favorite-border';

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{formatAuthor(author)}</Text>
      <Text style={styles.description}>{description}</Text>
      <FavoriteIcon
        iconName={iconName}
        color={iconStyles.color}
        size={iconStyles.size}
        handlePress={handleFavoritePress}
      />
    </View>
  );
};

ArticleScreen.options = {
  topBar: {
    title: {
      text: 'Article',
    },
  },
};

const iconStyles = {
  color: '#900',
  size: 30,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    padding: 15,
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
  },
  description: {
    paddingVertical: 10,
    fontSize: 20,
  },
});

export { ArticleScreen };
