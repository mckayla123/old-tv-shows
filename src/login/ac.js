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



class Ac extends React.Component {

  

  render() {
    return (
      

      <View style={styles.container}>

       <Text style={styles.textContainer}>
       YOU CHOSE COMEDY
        </Text>
        
    <View style={styles.textContainer}>
          
  <Text style={styles.buttonText}>
       1.MARTIN
       </Text>

    <Image source ={{uri: 'https://ronewiznation.files.wordpress.com/2016/10/14370676861229.jpg?quality=80&strip=all'}}
 style={{ height: 100, width: 200, justifyContent: 'center', }}
/>
         

      <Text style={styles.buttonText}>
       2. The FRESH PRINCE OF BEL AIR
       </Text>

 <Image source ={{uri: 'https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/blogs_2017/08/rehost_2f2016_2f9_2f13_2f1b5cb41f-6c9f-4862-ae3a-107fd32008ab_1_.jpg?itok=3V2At_67'}}
 style={{ height: 100, width: 200, justifyContent: 'center', }}
/>

       <Text style={styles.buttonText}>
       3.THE GAME
       </Text>

 <Image source ={{uri: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZDBlMWItZDFkNS00Y2NjLWFmMDYtYTBmMTJjYWVjNzVhXkEyXkFqcGdeQXVyODQ1NTk5OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'}}
 style={{ height: 140, width: 200, justifyContent: 'center', }}
/>

       <Text style={styles.buttonText}>
       4.ONE ON ONE
       </Text>

 <Image source ={{uri: 'https://storage.googleapis.com/btvwp-uploads/2018/06/8cb76423-ooo_slider_2560x1060.jpg'}}
 style={{ height: 100, width: 200, justifyContent: 'center', }}
/>

       <Text style={styles.buttonText}>
       5.THE BERNIE MAC SHOW
       </Text>

 <Image source ={{uri: 'https://img.srgcdn.com/e//aURjamxHcktKM3dxQkd4c0s5dDkuanBn.jpg'}}
 style={{ height: 100, width: 200, justifyContent: 'center', }}
/>
        </View>

      <View style={styles.textOne}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('HomeScreen')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText2}>
                            BACK TO HOME SCREEN
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

   touchableButton1: {
        backgroundColor: 'orange',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
   
   
    },

    buttonText2: {
     
        
        fontSize: 14,
        fontWeight:'bold',
    },
});


export default Ac;
