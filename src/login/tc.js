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
  ImageBackground,Platform,Animated,ScrollView
} from 'react-native';



class Tc extends React.Component {

  

  render() {
    return (
      

      <View style={styles.container}>

       <Text style={styles.textContainer}>
       YOU CHOSE TEENAGE COMEDY
        </Text>

        <ScrollView>
    <View style={styles.textContainer}>
          
  <Text style={styles.buttonText}>
       1.EVERYBODY HATES CHRIS 
       </Text>

    <Image source ={{uri: 'https://images.cwtv.com/images/cw/show-vertical/everybody-hates-chris.jpg'}}
 style={{ height: 200, width: 200, justifyContent: 'center', }}
/>
         

      <Text style={styles.buttonText}>
       2. JUST JORDAN
       </Text>

 <Image source ={{uri: 'https://vignette.wikia.nocookie.net/my-nickelodeon-disney-shows/images/d/d2/Just_Jordan.jpg/revision/latest/top-crop/width/360/height/450?cb=20171112224714'}}
 style={{ height: 200, width: 200, justifyContent: 'center', }}
/>

       <Text style={styles.buttonText}>
       3.MALCOLM IN THE MIDDLE 
       </Text>

 <Image source ={{uri: 'https://images-na.ssl-images-amazon.com/images/I/71rHD4cNLOL._SL1500_.jpg'}}
 style={{ height: 200, width: 200, justifyContent: 'center', }}
/>

       <Text style={styles.buttonText}>
       4.KENAN AND KEL
       </Text>

 <Image source ={{uri: 'https://m.media-amazon.com/images/M/MV5BNTk2MzEzMmUtMGNhMC00ZGYyLTg1ZDUtZmMxNjc3MDVmZjg0XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_UY1200_CR125,0,630,1200_AL_.jpg'}}
 style={{ height: 300, width: 200, justifyContent: 'center', }}
/>

      
        </View>

     </ScrollView>
                </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light gray',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer:{
   alignItems: 'center',
    textAlign: 'center',
    fontWeight:'Bold',
    fontSize:15,
    fontFamily:'Gramond',
    color:'blue'
   
  },
  buttonText:{
    textAlign: 'center',
    marginTop:12,
    fontWeight:'Bold',
    fontSize:15,
    fontFamily:'Gramond',
  },

 
});


export default Tc;
