import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    ListView,
    FlatList,
    uri,
    NavigatorIOS,
    TextInput,
    Button,
    ScrollView
}from 'react-native'
import { List,ListItem } from 'react-native-elements';
import {Navigator,StackNavigator} from 'react-navigation'

export default class Commemt extends Component{
    constructor(props){
        super(props);
        this.state={
            comment : [ {"id":"1","comment":"hahahaah"},
                        {"id" : "2","comment": "hsiofghvaik"},
                        {"id" : "3","comment": "hsiofghvaik"},
                        {"id" : "4","comment": "hsiofghvaik"},
                        {"id" : "5","comment": "hsiofghvaik"},
                        {"id" : "6","comment": "hsiofghvaik"}],
            comment_url : this.props.url,
        }
    }

    render(){
        //fetch url into comment[]
        return(
            <View>
                <List>
                    <FlatList
                        temSeparatorComponent = {this.sepa}
                        horizontal={false}
                        data={this.state.comment}
                        renderItem={this._renderItem}
                        ItemSeparatorComponent = {this._separactor}
                        keyExtractor = {item => item.id}
                        ListFooterComponent = {this._footer}
                    />
                </List>
            </View>
        );
    }
    _footer(){
        return(
            <View style={OneComment.InputStyle}>
                <TextInput style={OneComment.Input}/>
                <Button style={OneComment.Submmit} title={`submit`}
                    onPress={()=> alert("clicked")}
                />
            </View>
        );
    }
    _separactor = () =>{ return <View style={OneComment.LineStyle}/>}

    _renderItem(item){
        return(
            <TouchableOpacity>
                <ListItem
                    title={item.item.id}
                    subtitle={item.item.comment}
                />
            </TouchableOpacity>
        );
    }
}

var comm_width = Dimensions.get('window').width;
var comm_height = Dimensions.get('window').height;

const OneComment = StyleSheet.create({
    OneComment : {
        width : comm_width,
        height : comm_height/10,
    },
    LineStyle : {
        borderWidth : 1,
    },
    InputStyle : {
        height : comm_height/15,
        width : comm_width,
        flexDirection : 'row'
    },
    Input : {
        width : comm_width/1.2,
    },
    Submmit : {
        height : comm_height/20,
    }
});
