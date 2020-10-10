import React, { useState } from 'react';
import {
  Button,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { Feather } from '@expo/vector-icons';

// ADD MORE NAVIGATION VALUES 
const ComposeBar = ({ onSubmit, thread, contributors, initialValues }) => {

    const [body, setBody] = useState(initialValues.body);

    //console.log("ComposeBar/thread/"+thread);
    //console.log("ComposeBar/contributors/"+JSON.stringify(contributors));

    return (

      <View style={{borderWidth:5,borderColor:'cyan',flex:1,flexDirection:'row'}}>

        <View style={{flex:4}}>

          <TextInput
          value={body}
          autoCorrect={true}
          autoCapitalize='none'
          placeholder={'Enter the index to scroll'}
          onChangeText={text => setBody(text)}
          />

        </View>

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{flex:1}}>

          <Button title="Send" onPress={() => onSubmit(body,contributors,thread)} />

        </TouchableWithoutFeedback>

      </View>

    );
};

//
ComposeBar.defaultProps = {
  initialValues: {
    body: '',
  }
};

//
const styles = StyleSheet.create({

  background: {
    //borderWidth: 1,
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },

  inputStyle: {
    //borderWidth: 1,
    //borderColor: 'black',
    flex: 1,
    fontSize: 18,
  },

  iconStyle: {
    //borderWidth: 1,
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  },

  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    height:40,
  },

  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  },

});

//
export default ComposeBar;
