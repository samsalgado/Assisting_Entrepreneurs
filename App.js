import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ImageBackground, StyleSheet, Platform, ScrollView, Text, Image, View, SafeAreaView } from 'react-native';
import Forum from './src/Forum';
import Coding from './src/Coding';
import { createStackNavigator } from '@react-navigation/stack';
import Doc from './src/Doc';
import Home from './Home';
import MyModal from './src/modal';
import InvestModal from './src/invest';
import Tools from './src/Tools';
const eqrp = require('./images/eqrp.png');
const deed = require('./images/deed.png');
const code = require('./images/code.jpg');
const logo = require('./images/tt.png');

const Advice = () => (
  <ImageBackground 
  source={require('./images/background.png')}
  style={styles.background}
>  
    <View style={styles.adcontainer}>
      <View>
      <Forum />
      </View>
      <View style={styles.tools}>
        <Tools />
      </View>
      <View style={styles.mod}>      
      <Doc />
      </View>
      </View>
      </ImageBackground>
 );
 
const  EQRP = () => (
  <ImageBackground 
  source={require('./images/background.png')}
  style={styles.background}
>
  <View style={styles.adcontainer}>
    <Image style={styles.center} source={eqrp} />
    <Text style={styles.qrp}>Investing</Text>
   <Text style={styles.modal}><MyModal  /></Text>
   <Text style ={styles.modal}><InvestModal /></Text>
  <Image style={styles.deed} source={deed} />
  </View>
  </ImageBackground>

);
const  Programming = () => (
  <ImageBackground 
  source={require('./images/background.png')}
  style={styles.background}
>
  <View style={styles.adcontainer}>
    <Image style={styles.center} source={logo} />
    <Text style={styles.qrp}>Programming</Text>
   <Text style={styles.modal3}><Coding  /></Text>
  <Image style={styles.deed} source={code} />
  </View>
  </ImageBackground>

);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNav = () => (
  <Tab.Navigator>  
    <Tab.Screen name = "Home" component={Home} />
    <Tab.Screen name = "Investing" component={EQRP} />
    <Tab.Screen name = "Learn Coding" component={Programming} />
    <Tab.Screen name = "Advice" component={Advice} />
  </Tab.Navigator>
);
const App = () => {
  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({
  qrp: {
    flex: 1,
    bottom:5,
    left:10,
    textAlign: 'center',
    fontSize:1,
    fontWeight: 'bold',
    color:'white',
    flexDirection: 'row',

  },
  box:{
    flex: 2.4,
    marginTop:0,
    backgroundColor: 'white',
    borderWidth: 5,
    borderTopLeftRadius: 10,
    paddingStart: 10,
    borderTopRightRadius: 10,
    padding: 5,
    marginStart: 20,
    bottom: 30,
    height:550,
    left: 50,
    marginHorizontal: 0,
  },  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    paddingTop: 50,
    margin: 10,
  },
  adcontainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    padding: 0,
  },
  background: {
    width: '100%',
    height: '100%'
  },

  propContainer: {
    top:0,
    flexDirection:'row',
    margin:0,
    marginBottom:530,
    left:0,
  },  
  coinContainer: {
    flexDirection:'row',
    marginRight:5,
    justifyContent: 'space-between',
  },
  vidcontainer: {
    width: 400,
    height: 300,
    flex:1,
  },
    vidcontainer: {
    width: 400,
    height: 300,
    flex:1,
  },
  perc: {
    color: 'white',
    paddingHorizontal: 'auto',
    flexDirection: 'row',
    right: 15,
    fontSize:20,
    fontWeight: 'bold',
    bottom: 20,
  },
  one: {
    color: 'white',
    paddingHorizontal: 'auto',
    flexDirection: 'row',
    right: 255,
    fontWeight: 'bold',
    bottom: 0,
    fontSize:22,
    top: 0,
  },
  mod: {
    justifyContent: 'center',
    right:195,
    marginBottom:-600,
    fontWeight:'bold',
  },
  modal:{
    justifyContent:'center',
    top:250,
    left:0,
  },
  modal3:{
    justifyContent:'center',
    top:250,
    right:135,
  },

  tools: {
      justifyContent: 'center',
      right:195,
      marginBottom:-600,  
  },
  cap: {
    color: 'white',
    paddingHorizontal: 'auto',
    flexDirection: 'row',
    right: 185,
    fontSize:20,
    fontWeight: 'bold',
    top: 0,
    marginBottom:525,
  },

  textbtc: {
    fontSize:20,
    marginBottom:520,
    fontWeight: 'bold',
    marginEnd:200,
    left:200,
    bottom:30,
    marginStart:10,
    color: 'white',
    position: 'relative',
  },
  txt: {
    fontSize:20,
    marginLeft:45,
    top:0,
    right:100,
    marginEnd:10,
    flexDirection: 'row',
    fontWeight: 'bold',
    color: 'white',
  },

  center3: {
    width:50,
    height:50,
    flexDirection: 'row',
    left:180,
    marginRight:10,
    alignSelf: 'flex-start',
    bottom:330,
    marginBottom: 10,

  },
    container1: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },

    })
    },    
  center: {
    alignItems:'center', 
    position:'absolute',
    width:400,
    resizeMode:'contain',
    height:400,
    left:0,
    margin:0,
    marginVertical:-100,
    top:50,
  },
  container2: {
    backgroundColor: '#141414',
    flex: 1,
    alignItems: "center",
},
title: {
    fontSize: 20,
    color: "#fff",
    marginTop: 10,
},
list: {
    width: "90%",
},
searchInput: {
    color: "#fff",
    borderBottomColor: '#c8cbfa',
    borderBottomWidth: 1,
    width: "40%",
    textAlign: "left"
},

  center1: {
    alignItems:'center', 
    position:'absolute',
    width:400,
    height:400,
    left:0,
    margin:0,
    marginVertical:-100,
    top:390,
  },
  center2: {
    alignItems:'center', 
    position:'absolute',
    width:200,
    height:200,
    left:100,
    margin:0,
    marginVertical:-100,
    top:390,
  },
  deed: {
    alignItems:'center', 
    position:'absolute',
    width:440,
    resizeMode:'center',
    height:230,
    left:-30,
    margin:0,
    marginVertical:-100,
    top:400,
  },

  div: {
    height: 400,
    flex:1,
  },
  text: {
    fontSize:24,
    textAlign:'center',
    marginTop:100,
    fontWeight: 'bold',
    alignContent:'center',
  },
  text1: {
    fontSize:24,
    textAlign:'center',
  },
  feed: {
    fontSize:24,
    textAlign:'center',
    marginTop:10,
    fontWeight: 'bold',
    alignContent:'center',
  },
  divWrapper:{
    marginTop:280,
  },


});
