import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FavoriteIcon = ({ iconName, size, color, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
};

export { FavoriteIcon };
