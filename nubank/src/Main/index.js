import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'/
Icon.loadFont();

import Header from '../components/Header';
import Tabs from '../components/Tabs';

import {Container} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>
              Saldo disponivel
            </Title>
            <Description>
              R$ 589.611,65
            </Description>
          </CardContent>
          <Cardfooter>
            <Anntation>
              Trasnferencia recebida
            </Anntation>
          </Cardfooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
