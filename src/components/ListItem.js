import React, { Component } from 'react';
import {
    Text, LayoutAnimation,
    TouchableWithoutFeedback,
    View, UIManager, Platform
} from 'react-native';
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

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    /**
     * This method is inovked immediately before rendering when new props or state are being received. This
     * method is not called in for the initial render but called on update just before the render function
     * is invoked. An update to the state at this stage will not cause the component to re-render.
     */
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    /**
     * 
     */
    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}> {library.description} </Text>
                </CardSection >
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
 * mapStateToProps is by convention called with a second arguement that is the props of this 
 * component which in our case is this.props.library passed to us by the LibraryList component.
 * @param {*} state 
 * @param {*} ownProps 
 */
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

/**
 * The first arguement is a function that is called after the reducer updates the redux state
 * in order to update the container state. The second arguement is the function takes the 
 * action returned by the actioncreator and then ensures that it flows through our middleware
 *  to the reducers which updates the redux state and re-renders the containers by calling the function
 * passed as the first parameter.
 */
export default connect(mapStateToProps, actions)(ListItem);