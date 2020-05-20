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
  ImageBackground,Platform,Animated, ScrollView,
} from 'react-native';




class Td extends React.Component {

  

  render() {
    return (
      

      <View style={styles.container}>

       <Text style={styles.textContainer}>
       YOU CHOSE TEENAGE DRAMA
        </Text>

        <ScrollView>
    <View style={styles.textContainer}>
          
  <Text style={styles.buttonText}>
       1.UNFABULOUS
       </Text>

    <Image source ={{uri: 'https://vignette.wikia.nocookie.net/nickelodeon/images/3/34/Unfabulous.jpg/revision/latest/top-crop/width/360/height/360?cb=20100927053836'}}
 style={{ height: 200, width: 200, justifyContent: 'center', }}
/>
         

      <Text style={styles.buttonText}>
       2. DEGRASSI
       </Text>

 <Image source ={{uri: 'https://tvguide1.cbsistatic.com/feed/1/565/101128565.jpg'}}
 style={{ height: 300, width: 200, justifyContent: 'center', }}
/>

       <Text style={styles.buttonText}>
       3.BUFFY THE VAMPIRE SLAYER
       </Text>

 <Image source ={{uri: 'https://m.media-amazon.com/images/M/MV5BY2MwOGIyZGYtNzgxZC00N2Q5LTllYjItM2U4MTkwMDBjYzUyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_UY1200_CR93,0,630,1200_AL_.jpg'}}
 style={{ height: 300, width: 200, justifyContent: 'center', }}
/>

       <Text style={styles.buttonText}>
       4.LIZZIE MCGUIRE
       </Text>

 <Image source ={{uri: 'https://m.media-amazon.com/images/M/MV5BNTBlNjNjZjktMmQxMi00M2FhLTgzOTctMTc5YjZkODJlYTFlXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_UY1200_CR138,0,630,1200_AL_.jpg '}}
 style={{ height: 200, width: 200, justifyContent: 'center', }}
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


export default Td;
