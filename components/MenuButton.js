import React from 'react';
import {StyleSheet} from 'react-native';
import {Ionicons } from '@expo/vector-icons';
 
export default class MenuButton extends React.Component {
    render()
 {
     return(
        <Ionicons
            name="md-menu"
            color="red"
            size={32}
            style={styles.menuIcon}
            onPress= {()=> this.props.navigation.toggleDrawer()}
        />
    )
 }}


 const styles = StyleSheet.create({
     menuIcon:{
         zIndex:9,
         position:'relative',
         top:40,
         left: 10,
     }
 })