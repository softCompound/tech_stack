import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
            <Text style={textStyle}> {props.description} </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        //this property expands the object as much as possible
        flex: 1,
        //this rule just applies to this component to behave using flex property
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 15
    },
    textStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { Button };
