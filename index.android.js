import React, { Component } from 'react';
import {
  AppRegistry,//REGISTRASI CLASSNYA
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';

import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';

// export default class AwesomeProject extends Component {
//   render() {

//     return (
//       <View style={styles.container}>

//       <Text style={styles.welcome}>
//         INI DIA TAMPILAN PERTAMA
//       </Text>

//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>

//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>

//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#7FFF00',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: 'black',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);


// export default class AwesomeProject extends Component {
//   render() {

//     return (
//       <Text>Hello world!</Text>
//     );
//   }
// }



// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

// export default class AwesomeProject extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 110}}/>
//     );
//   }
// }

// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);


// class Gambar extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 110}}/>
//     );
//   }
// }

// class Greeting extends Component{
//   render() {
//     return (
//         <Text>Hello {this.props.name} !</Text>
//       );
//   }
// }


// class AwesomeProject extends Component {
//   render() {
//     return(
//           <View style={{alignItems: 'center'}}>
//           <Greeting name='Karta' />
//           <Greeting name='Shake' />
//           <Gambar />
//           </View>
//       );
//   }
// }

// AppRegistry.registerComponent ('AwesomeProject', () => AwesomeProject);

// class UselessTextInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { text: 'Useless Placeholder' };
//   }

//   render() {
//     return (
//       <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         onChangeText={(text) => this.setState({text})}
//         value={this.state.text}
//       />
//     );
//   }
// }

// //App registration and rendering
// AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);





export class FormView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formData:{}
    }
  }
  handleFormChange(formData){
    /*
    formData will contain all the values of the form,
    in this example.

    formData = {
    first_name:"",
    last_name:"",
    gender: '',
    birthday: Date,
    has_accepted_conditions: bool
    }
    */

    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }
  handleFormFocus(e, component){
    //console.log(e, component);
  }
  openTermsAndConditionsURL(){

  }
  render(){
    return (<ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10,paddingRight:10, height:200}}>
      <Form
        ref='registrationForm'
        onFocus={this.handleFormFocus.bind(this)}
        onChange={this.handleFormChange.bind(this)}
        label="Personal Information">
        <Separator />
        <Separator />
        <InputField
          ref='first_name'
            //label='First Name'
          placeholder='First Name'
          helpText={((self)=>{

            if(Object.keys(self.refs).length !== 0){
              if(!self.refs.registrationForm.refs.first_name.valid){
                return self.refs.registrationForm.refs.first_name.validationErrors.join("\n");
              }

            }
            // if(!!(self.refs && self.refs.first_name.valid)){
            // }
          })(this)}
          validationFunction={[(value)=>{
            /*
            you can have multiple validators in a single function or an array of functions
             */

            if(value == '') return "Required";
            //Initial state is null/undefined
            if(!value) return true;
            // Check if First Name Contains Numbers
            var matches = value.match(/\d+/g);
            if (matches != null) {
                return "First Name can't contain numbers";
            }

            return true;
          }, (value)=>{
            ///Initial state is null/undefined
            if(!value) return true;
            if(value.indexOf('4')!=-1){
              return "I can't stand number 4";
            }
            return true;
          }]}
          />

          <InputField ref='last_name' placeholder='Last Name'/>
          <InputField
            multiline={true}
            ref='other_input'
            placeholder='Other Input'
            helpText='this is an helpful text it can be also very very long and it will wrap' />


          <Separator />
          <LinkField label="test test test" onPress={()=>{}}/>
          <SwitchField label='I accept Terms & Conditions'
            ref="has_accepted_conditions"
            helpText='Please read carefully the terms & conditions'/>
          <PickerField ref='gender'
            label='Gender'
            options={{
              "": '',
              male: 'Male',
              female: 'Female'
            }}/>
            <DatePickerField ref='birthday'
            minimumDate={new Date('1/1/1900')}
            maximumDate={new Date()}
            placeholder='Birthday'/>
          <TimePickerField ref='alarm_time'
        placeholder='Set Alarm'/>
          <DatePickerField ref='meeting'
            minimumDate={new Date('1/1/1900')}
            maximumDate={new Date()} mode="datetime" placeholder='Meeting'/>
          </Form>
          <Text></Text>

      </ScrollView>);
    }
  }

  AppRegistry.registerComponent ('AwesomeProject', () => FormView);
