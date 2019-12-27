import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './ListHelpOrder.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../../styles';

const ListHelpOrder = ({id, question, date, answered}) => {
  return (
    <>
      <TouchableOpacity style={styles.helporderCheckinWrapper}>
        <View style={styles.helporderViewTitle}>
          <View style={styles.helporderViewAnswer}>
            <Icon
              name="crop-square"
              size={20}
              color={answered ? colors.greenActive : colors.grayInactive}
            />

            {answered ? (
              <Text style={styles.helporderTextStatusAnswered}>Respondido</Text>
            ) : (
              <Text style={styles.helporderTextStatus}>Sem resposta</Text>
            )}
          </View>

          <Text style={styles.textHour}>{date}</Text>
        </View>

        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={styles.helporderTextAnswer}>
          {question}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export {ListHelpOrder};
