/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  Dimensions,
  ScrollView,
  StyleSheet,
  SwitchIOS,
  Text,
  View,
} from 'react-native';

import {
  Cell,
  CustomCell,
  Section,
  TableView,
} from 'react-native-tableview-simple';

var ParallaxView = require('react-native-parallax-view');
var HEADER = React.createClass({
  render(){
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Header For Parallax Image aadfajdfljlkajdfjlkajdsl
        </Text>
      </View>
    )
  }
})

// Example component for section:headerComponent
const CustomSectionHeader = () => (
  <View>
    <Text>Custom header!</Text>
  </View>
);

// eslint-disable-next-line react/prefer-stateless-function
class Example extends Component {


  heynoFunc() {
    console.log('heyNO from function')
  }

  render() {
    return (
      <ParallaxView
               ref={component => this._scrollView = component}
               backgroundSource={{ uri: "https://i.imgur.com/mEVXC36.jpg" }}
               windowHeight={300}
               header={<HEADER/>}
               >
        <ScrollView contentContainerStyle={styles.stage}>
          <TableView>
            <Section header="STANDARD" footer="A Footer">
              <Cell cellStyle="Basic" title="Basic" />
              <Cell cellStyle="RightDetail" title="RightDetail" detail="Detail" />
              <Cell cellStyle="LeftDetail" title="LeftDetail" detail="Detail" />
              <Cell cellStyle="Subtitle" title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" />
              <Cell cellStyle="Basic" title="Pressable w/ accessory" accessory="DisclosureIndicator" onPress={ this.heynoFunc } />
            </Section>
            <Section header="DISABLED">
              <Cell cellStyle="Basic" isDisabled title="Basic" />
              <Cell cellStyle="RightDetail" isDisabled title="RightDetail" detail="Detail" />
              <Cell cellStyle="LeftDetail" isDisabled title="LeftDetail" detail="Detail" />
              <Cell cellStyle="Subtitle" isDisabled title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" />
              <Cell cellStyle="Basic" isDisabled title="Pressable w/ accessory" accessory="DisclosureIndicator" onPress={() => console.log('Heyho!')} />
            </Section>
            <Section header="ACCESSORY">
              <Cell cellStyle="Basic" accessory="DisclosureIndicator" title="Basic" />
              <Cell cellStyle="RightDetail" accessory="DetailDisclosure" title="RightDetail" detail="Detail" />
              <Cell cellStyle="LeftDetail" accessory="Detail" title="LeftDetail" detail="Detail" />
              <Cell cellStyle="Subtitle" accessory="Checkmark" title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" />
              <Cell cellStyle="Basic" accessory="Detail" title="Pressable w/ accessory" onPress={() => console.log("heyNo")} />
            </Section>
            <Section header="CUSTOMCELLS">
              <CustomCell>
                <Text style={{ flex: 1, fontSize: 16 }}>Loading</Text>
                <ActivityIndicator />
              </CustomCell>
              <CustomCell>
                <Text style={{ flex: 1, fontSize: 16 }}>Switch</Text>
                <SwitchIOS />
              </CustomCell>
              <CustomCell contentContainerStyle={{ height: 60 }}>
                <Text style={{ flex: 1, fontSize: 16 }}>Custom height</Text>
              </CustomCell>
            </Section>
            <Section headerComponent={<CustomSectionHeader />}>
              <Cell cellStyle="Basic" title="Section uses prop headerComponent" />
            </Section>
          </TableView>
          <View
            style={{
              height: Dimensions.get('window').height,
            }}
          >
            <View
              style={{
                backgroundColor: '#37474F',
                height: 500,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View
                style={{
                  backgroundColor: '#ffc107',
                  width: 80,
                  height: 80,
                  borderRadius: 10,
                }}
              />
            </View>
            <TableView>
              <Section footer="All rights reserved.">
                <Cell title="Help / FAQ" titleTextColor="#007AFF" onPress={() => console.log('open Help/FAQ')} />
                <Cell title="Contact Us" titleTextColor="#007AFF" onPress={() => console.log('open Contact Us')} />
              </Section>
            </TableView>
          </View>
        </ScrollView>
      </ParallaxView>
    );
  }
}

const styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingTop: 20,
    paddingBottom: 20,
  },
  header: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingVertical: 24
  },
  headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#353535'
  },
});

AppRegistry.registerComponent('example', () => Example);
