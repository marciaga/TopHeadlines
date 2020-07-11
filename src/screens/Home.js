import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { NEWS_API_KEY } from '@env';

import { get } from '../utils/http';
import { NEWS_API_URL } from '../utils/constants';

import { ArticleListItem } from '../components/ArticleListItem';

const HomeScreen = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const qs = `country=us&apiKey=${NEWS_API_KEY}`;
        const url = `${NEWS_API_URL}/top-headlines?${qs}`;

        const result = await get(url);

        setArticles(result.articles);
      } catch (error) {
        console.error(error);
        // TODO - handle
      }
    };

    fetchNews();
  }, []);

  const handlePress = (value) => {
    Navigation.push(props.componentId, {
      component: {
        name: 'Article',
        passProps: { ...value },
      },
    });
  };

  const renderItem = ({ item }) => (
    <ArticleListItem item={item} onPress={handlePress} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.url}
      />
    </SafeAreaView>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Articles',
    },
  },
  bottomTab: {
    text: 'Home',
  },
};

export { HomeScreen };
