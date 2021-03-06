import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated
} from 'react-native';



class Two extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>

    <Text style ={styles.welcome}>
    YOU CHOSE CHILDREN ,WHICH GENRE DO YOU PERFER TO WATCH?
       </Text>
       <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Email')}
            >
           <View style={styles.touchableButton2}>
                        <Text style={styles.buttonText}>
                            CHILD FRIENDLY
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>

          
 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light gray',
    justifyContent: 'center',
    alignItems:'center',
  },

  welcome:{
    textAlign:'center',
    marginBottom:12,
  },

   touchableButton2: {
        backgroundColor: 'yellow',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    
         borderRadius: 10,
   
   
    },
  buttonText:{
    fontWeight:'Bold',
  fontSize:15,
  fontFamily:'Gramond',
  },
});


export default Two;
