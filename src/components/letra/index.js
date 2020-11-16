import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

function Letra(props) {

    let text = props.textValue.split('');

    return (
        <View style={styles.divLetras}>
            {text.map((letra, i) => <Text key={i} style={styles.letraP}>{letra}</Text>)}
        </View>
    );

}

export default Letra;