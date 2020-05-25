import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, KeyboardAvoidingView, TextInput, ScrollView, View, Text } from 'react-native';

const content = [1,2,3,4,5,6,7,8,9,10];

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.keyboardAvoidContainer} behavior="padding">
          <ScrollView style={{flex: 1}}>
            {content.map(num => (
              <View style={{height: 80, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} key={num}>
                <Text>{num}</Text>
              </View>
            ))}
          </ScrollView>
          <TextInput style={{height: 40, width: '100%', backgroundColor: '#fff', paddingLeft: 10, justifySelf: 'flex-end', color: '#fff'}} placeholder={'Enter text here'}/>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  keyboardAvoidContainer: {
    flex: 1,
    backgroundColor: 'orange'
  }
});
