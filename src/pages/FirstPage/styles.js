import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },

  title: {
    fontSize: 20,
    color: '#808080',
    fontWeight: 'bold',
  },

  title2: {
    fontSize: 20,
    color: '#808080',
    fontWeight: 'bold',
    marginTop: 80,
  },

  espacador: {
    width: Dimensions.get('window').width - 80,
    borderBottomColor: '#483D8B',
    borderBottomWidth: 2,
    marginBottom: 30,
  },

  letrasInput: {
    padding: 5,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    width: '75%',
  },

  button: {
    backgroundColor: `#d1d1d1`,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 5,
  },

  containerH: {
    padding: 20,
    backgroundColor: '#2251dd',
    width: '100%',
    shadowOffset: { width: 0, height: 7 },
    shadowColor: 'black',
    shadowOpacity: 0.41,
    elevation: 150,
    shadowRadius: 9.11,
  },

  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },

  divBody: {
    flex: 1,
    justifyContent: 'space-between'
  },

  divTexto: {
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center' 
  },

  divInputs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: `center`,
    margin: 10
  },

});

export default styles;