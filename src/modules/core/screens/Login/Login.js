import React, {useState, useEffect, useMemo} from 'react';
import {View, Image, TextInput, Text, Alert, Keyboard} from 'react-native';
import {Button} from '../../../../components/Button';
import {styles} from './Login.style';
import {contentWrapper} from '../../../../styles/reusable';
import {CustomStatusBar} from '../../../../components/CustomStatusBar';
import AsyncStorage from '@react-native-community/async-storage';

import {StorageService} from '../../../../services/storage.service';

import {Actions} from 'react-native-router-flux';

const Login = () => {
  const [getId, setGetId] = useState('');
  const [studentId, setStudentId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const login = async getId => {
    setIsLoading(true);

    await StorageService.set('gympointStudentId', getId);

    console.log(getId);
    setIsLoading(false);
  };

  const retrieveStudentId = async () => {
    setIsLoading(true);
    let _studentId = await StorageService.get('gympointStudentId');

    setStudentId(_studentId);

    console.log('ID Storado: ' + studentId);

    setIsLoading(false);
  };

  return (
    <>
      <CustomStatusBar />
      <View style={styles.content}>
        <View style={contentWrapper}>
          <Image
            style={styles.logoLogin}
            source={require('../../../../assets/images/logo.png')}
          />

          <Text style={{marginVertical: 40}}></Text>

          <TextInput
            style={styles.inputID}
            value={getId}
            onChangeText={e => setGetId(e)}
            placeholder="Informe seu ID de cadastro"
            keyboardType="numeric"
          />
          <Button onPress={() => login(getId)} text="set" />

          <Button onPress={() => retrieveStudentId()} text="get" />

          <Button onPress={() => {}} text="Printar" />

          <Button onPress={() => {}} text="delte" />
        </View>
      </View>
    </>
  );
};

export {Login};
