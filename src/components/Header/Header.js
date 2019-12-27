import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {styles} from './Header.style';
import {colors} from '../../styles';
import Icon from 'react-native-vector-icons/Feather';
import {Actions} from 'react-native-router-flux';

const Header = ({backable}) => {
  return (
    <View style={styles.headerContainer}>
      {backable ? (
        <TouchableOpacity onPress={() => Actions.pop()}>
          <Icon name="arrow-left" size={20} color={colors.gympoint} />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
      <TouchableOpacity>
        <Image source={require('../../assets/images/logoHeader.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="log-out" size={20} color={colors.gympoint} />
      </TouchableOpacity>
    </View>
  );
};

export {Header};
