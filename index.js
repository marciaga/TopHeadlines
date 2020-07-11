/**
 * @format
 */
import { Navigation } from 'react-native-navigation';

import { HomeScreen } from './src/screens/Home';
import { ArticleScreen } from './src/screens/Article';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Article', () => ArticleScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: '#4d089a',
    },
    topBar: {
      title: {
        color: 'white',
      },
      backButton: {
        color: 'white',
      },
      background: {
        color: '#4d089a',
      },
    },
    bottomTab: {
      fontSize: 14,
      selectedFontSize: 14,
    },
  });
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});
