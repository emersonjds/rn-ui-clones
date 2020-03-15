import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Menu from '../components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Cardfooter,
  Description,
  Title,
  Annotation,
  CardFooter,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponivel</Title>
            <Description>R$ 589.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Trasnferencia recebida de Rafael no valor de R$ 20,00
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
