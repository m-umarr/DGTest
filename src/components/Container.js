import React from 'react';
import { SafeAreaView, View, Dimensions, StatusBar, Platform } from 'react-native';
const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 50 : StatusBar.currentHeight;

function Container(props) {

    return (
        <View style={{ flex: 1 }}>
        <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: props.backgroundColor }}>
          <StatusBar
            translucent
            backgroundColor={props.backgroundColor}
            barStyle="dark-content"
          />
        </View>
       
        <SafeAreaView  onTouchStart={props.onTouchStart} onTouchEnd={props.onTouchEnd} style={{...styles.container, backgroundColor: props.backgroundColor}}  forceInset={{top: 'never'}}>
        {props.children}
        </SafeAreaView>
      </View>
   
        // <SafeAreaView style={[styles.container, props.style,]}  forceInset={{top: 'never'}}>
           
        //     <StatusBar
        //         backgroundColor={props.backgroundColor}
        //         barStyle="light-content"
              
        //     />

        //     {props.children}
        // </SafeAreaView>
   
    );
}

const styles = {
    container: {
        flex: 1,
       
    },
    statusBar: {
        height: STATUS_BAR_HEIGHT,
      },
};
export default Container;