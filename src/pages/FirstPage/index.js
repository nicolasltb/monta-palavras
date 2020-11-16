import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { filtrarPalavras } from '../../utils/checarPalavra'
import Letra from '../../components/letra'

function FirstPage(props) {

    const [letras, setLetras] = useState('');
    const [result, setResult] = useState('');

    function checarCaracteres() {
        let resultado = filtrarPalavras(letras);
        setResult(resultado);
        atualizarTexto(resultado);
    }

    function atualizarTexto(resultado) {

        if (Array.isArray(resultado)) {
            return (
                
                <View style={styles.divTexto}>
                    <Text style={styles.title2}>Palavra de {resultado[1]} pontos</Text>
                    <Letra textValue={resultado[0]}></Letra>
                    <Text style={styles.espacador}></Text>
                    <Text style={styles.title2}>Sobraram:</Text>
                    <Letra textValue={resultado[2]}></Letra>
                </View>
                );
        } 
        else if (resultado === '') {
            return (
                <View style={styles.divTexto}>
                    <Text style={styles.title}>Digite as letras</Text>
                    <Text style={styles.title}>disponiveis nesta jogada</Text>
                </View>
            );
        }
        else if (resultado == "Nao foi possivel formar uma palavra.") {
            return (
                <View style={styles.divTexto}>
                    <Text style={styles.title}>Nao foi possivel</Text>
                    <Text style={styles.title}>formar uma palavra.</Text>
                </View>
            )
        }
        else if (resultado == "input vazio.") {
            return (
                <View style={styles.divTexto}>
                    <Text style={styles.title}>Entrada de dados inválida</Text>
                    <Text style={styles.title}>Não é permitido entrada em branco.</Text>
                </View>
            );
        }

    }

    return (

        <View style={styles.container}>

            <View style={styles.containerH}>
                <Text style={styles.headerText}>Monta Palavras</Text>
            </View>

            <View style={styles.divBody}>

                {atualizarTexto(result)}

                <View style={styles.divInputs}>
                    <TextInput style={styles.letrasInput} placeholder="" value={letras} onChangeText={(letras) => setLetras(letras.toLowerCase())}></TextInput>
                    <TouchableOpacity style={styles.button} onPress={checarCaracteres}>
                        <Text style={{ color: 'black' }}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    );

}

export default FirstPage;