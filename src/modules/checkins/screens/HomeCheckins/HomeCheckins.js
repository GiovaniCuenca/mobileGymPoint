import React, {useState, useEffect} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {styles} from './HomeCheckins.style.';
import {contentWrapper} from '../../../../styles/reusable';
import {
  CustomStatusBar,
  BottomNav,
  Header,
  Button,
  Loading,
} from '../../../../components';
import {ListCheckin} from '../../components';
import {colors} from '../../../../styles';
import {parseISO, formatRelative} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import api from '../../../../services/api';

const HomeCheckins = () => {
  const [checkIns, setCheckIns] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function loadCheckins() {
    const response = await api.get(`/students/39/checkins`);

    setCheckIns(
      response.data.map(checkin => {
        return {
          ...checkin,
          formattedDate: formatRelative(
            parseISO(checkin.created_at),
            new Date(),
            {
              locale: ptBR,
              addSuffix: true,
            },
          ),
        };
      }),
    );
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    loadCheckins();
  }, []);

  async function newCheckIn() {
    setIsLoading(true);
    try {
      await api.post(`/students/39/checkins`);
    } catch (err) {
      Alert.alert('Aviso', 'Número de Check-Ins atingidos no máximo período');
    }

    setIsLoading(false);
    loadCheckins();
  }

  async function handleSubmitCheckin() {
    Alert.alert(
      'Você tem certeza?',
      'Confirmar Check-In?',
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () => newCheckIn()},
      ],
      {cancelable: true},
    );
  }

  return (
    <>
      <CustomStatusBar />

      <Header backable />

      <View style={styles.content}>
        <View style={contentWrapper}>
          <Button
            text="Novo Check-In"
            onPress={() => {
              handleSubmitCheckin();
            }}
            loading={isLoading}
          />

          {isLoading ? (
            <Loading size={30} color={colors.gympoint} />
          ) : (
            <FlatList
              style={{marginVertical: 20, paddingRight: 10}}
              data={checkIns}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <ListCheckin id={item.id} date={item.formattedDate} />
              )}
            />
          )}
        </View>
      </View>

      <BottomNav />
    </>
  );
};

export {HomeCheckins};
