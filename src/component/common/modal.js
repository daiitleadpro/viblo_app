import React, { Component } from "react";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";
import Modal from "react-native-modal";
//import { TextInput } from "react-native-gesture-handler";

export const ModalT = ({ isVisible, toggleModal, onChangeText, value, loginGG }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Modal style={styles.containerBox} isVisible={isVisible}>
        <TextInput
          onChangeText={onChangeText}
          autoFocus={true}
          value={value}
          maxLength={4}
          style={styles.inputs}
          placeholder="Enter Pincode"
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
          <Button title="Hide" onPress={toggleModal} />
          <Button title="Login" onPress={loginGG} />
        </View>


      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  inputs: {
    marginLeft: 12,
    paddingLeft: 10,
    marginTop: 30,
    width: "90%",
    height: "30%",
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10

  },
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    backgroundColor: 'black',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  containerBox: {
    width: 300,
    marginTop: 250,
    marginLeft: 40,
    marginBottom: 250,
    zIndex: 2,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#3f78eb',
    backgroundColor: 'white',
  },
});

