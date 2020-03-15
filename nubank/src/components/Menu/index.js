import React from 'react';
import {View} from 'react-native';
import QRCode from 'react-native-qrcode';

import {Container, Code} from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        {/* <QRCode
            value="https://google.com"
            size={80}
            bgColor="#FFF"
            fgColor="#8b10ae"
          /> */}
        {/* <QRCode
          value={this.state.text}
          size={200}
          bgColor="purple"
          fgColor="white"
        /> */}
      </Code>
    </Container>
  );
}
