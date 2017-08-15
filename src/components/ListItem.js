import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
//get all functions from actions
import * as actions from '../actions';

class ListItem extends Component {

    /**
     * 
     * @param {*} props 
     */
    constructor(props) {
        super(props);
    }

    /**
     * 
     */
    renderDescription() {
        const { library, selectLibraryId } = this.props;

        if (library.id === selectLibraryId) {
            return (
                <CardSection>
                    <Text> {library.description} </Text>
                </CardSection>
            );
        }
    }

    /**
     * 
     */
    render() {
        console.log(this.props);
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => { this.props.selectLibrary(id) }}>
                <View>
                    <CardSection>
                        <Text style={styles.textStyles}> {title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>

            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    textStyles: {
        fontSize: 18,
        padding: 10
    }
};


/**
 * 
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectLibraryId: state.selectedLibraryId
    }
};

/**
 * The first arguement is a function that is called after the reducer updates the redux state
 * in order to update the container state. The second arguement is the function takes the 
 * action returned by the actioncreator and then ensures that it flows through our middleware
 *  to the reducers which updates the redux state and re-renders the containers by calling the function
 * passed as the first parameter.
 */
export default connect(mapStateToProps, actions)(ListItem);