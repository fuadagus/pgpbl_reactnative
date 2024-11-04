import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome} from '@fortawesome/react-native-fontawesome';
import { faUser, faUserGraduate  } from '@fortawesome/free-solid-svg-icons';
import Profil from './App';
import Mahasiswa from './Mahasiswa';
import { WebView } from 'react-native-webview';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function HomeScreen() {
  return (
    <Profil></Profil>


    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>Home!</Text>
    // </View>
  );
}

function DataMahasiswaScreen() {
  return (
   <Mahasiswa></Mahasiswa>
  );
}
function WebScreen() {
  return (
    <WebView
        source={{ uri: 'https://github.com/fuadagus' }}
      />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profil" component={HomeScreen}
          options={{headerShown:false,
                    tabBarIcon: ({ color}) => (
                      <FontAwesome icon={faUser} color={color} />
                    )
                
          }}
          />
        <Tab.Screen name="Data Mahasiswa" component={DataMahasiswaScreen}
          options={{headerShown:false,
                    tabBarIcon: ({ color}) => (
                      <FontAwesome icon={faUserGraduate} color={color} />
                    )
          }}
        />
        <Tab.Screen name="GitHub" component={WebScreen}
          options={{headerShown:false,
                    tabBarIcon: ({ color}) => (
                      <FontAwesome icon={faGithub} color={color} />
                    )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}