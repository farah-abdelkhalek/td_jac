import * as React from 'react';
import { StyleSheet, ScrollView} from 'react-native';

import { Text, View } from '../components/Themed';
import members from '../td_jac_test/components/members.json';


export default function TabOneScreen() {
  return (

         <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
            <Text style={styles.title}>Trombinoscope</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

                 {members.json(m => (
                     <React.Fragment>
                        <TouchableOpacity onPress={() => props.navigation.navigate('vueB')}>
                            <Text style={{color: "black", fontSize: 20}}>{m}</Text>
                            <Text style={{color: "black", fontSize: 20}}>{m}</Text>
                            <Text style={{color: "black", fontSize: 20}}>{m}</Text>

                        </TouchableOpacity>

                     </React.Fragment>

                   ))}

                </View>
            </ScrollView>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
