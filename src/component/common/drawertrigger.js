import React from 'react';
import { TouchableOpacity, StyleSheet,Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

// withNavigation allows components to dispatch navigation actions
import { withNavigation } from 'react-navigation';

// DrawerActions is a specific type of navigation dispatcher
import { DrawerActions } from 'react-navigation-drawer';

class DrawerTrigger extends React.Component {
  render() {
    console.log('okooksher')
    return (
      <TouchableOpacity style={styles.trigger}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer())
        }}
      >
        <Feather name={'menu'} size={25} color={'#3f78eb'} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  trigger: {
    marginLeft: 20,
    borderRadius: 30,
    width: 60,
    height: 60,
    marginTop:35
  }
});

export default withNavigation(DrawerTrigger);