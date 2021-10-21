import React from 'react';

import { Text, View } from 'react-native';
import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

export function Message() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Texto da Mensagem
      </Text>

      <View style={styles.footer}>
        <UserPhoto
          imageUri="https://github.com/arthurfortunato.png"
          sizes="SMALL" />

        <Text style={styles.userName}>
          Nome do usuário
        </Text>

      </View>
    </View>
  );
}