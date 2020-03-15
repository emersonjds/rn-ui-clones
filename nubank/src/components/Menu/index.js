import React from 'react';
import {View, Image} from 'react-native';

import {Container, Code} from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <Image
          style={{width: 80, height: 80}}
          source={{
            uri:
              'https://www.imgonline.com.ua/examples/qr-code-violet-color.png',
          }}
        />
      </Code>
    </Container>
  );
}
