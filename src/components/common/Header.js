// import library for making a component
import React from 'react';
import { Text, View } from 'react-native';

//make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.head}</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        elevation: 6,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
};
//make the component available for other parts of the app
export { Header };
