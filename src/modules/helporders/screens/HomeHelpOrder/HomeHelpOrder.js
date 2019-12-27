import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './HomeHelpOrder.style';
import {contentWrapper} from '../../../../styles/reusable';
import {
  CustomStatusBar,
  BottomNav,
  Header,
  Button,
} from '../../../../components';
import {ListHelpOrder} from '../../components';
import {parseISO, formatRelative} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import api from '../../../../services/api';

const HomeHelpOrder = () => {
  const [helpOrders, setHelpOrders] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function loadHelpOrders() {
    const response = await api.get(`/students/39/help-orders`);

    setHelpOrders(
      response.data.map(helporder => {
        return {
          ...helporder,
          answered: helporder.answer === null ? false : true,
          formattedDate: formatRelative(
            parseISO(helporder.createdAt),
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
    loadHelpOrders();

    console.log(helpOrders);
  }, []);

  return (
    <>
      <CustomStatusBar />

      <Header backable />

      <View style={styles.content}>
        <View style={contentWrapper}>
          <Button text="Novo pedido de auxílio" onPress={() => {}} />

          <FlatList
            style={{marginVertical: 20, paddingRight: 10}}
            data={helpOrders}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ListHelpOrder
                id={item.id}
                question={item.question}
                date={item.formattedDate}
                answered={item.answered}
              />
            )}
          />
        </View>
      </View>

      <BottomNav />
    </>
  );
};

export {HomeHelpOrder};
