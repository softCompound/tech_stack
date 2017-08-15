import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

/**
 * 
 */
class LibraryList extends Component {

    /**
     * 
     */
    constructor() {
        super();
    }

    /**
     * Initialise a datasource for a listview
     */
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        //this is a wrapper for a data to be displayed inside the listview
        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    /**
     * 
     * @param {*} library 
     */
    renderRow(library) {
        return <ListItem library={library} />;
    }

    /**
     * 
     */
    render() {
        // console.log(this.props);
        //renderRow property of the listview defines how a particular row should be displayed
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

/**
 * 
 * @param {*} state 
 */
const mapStateToProps = state => {
    return {
        libraries: state.libraries
    };
}

/**
 * connect() gets called which returns a function and therefore
 * we pass in our class LibraryList as a parameter to the function returned
 * by the connect function. Whenever the LibraryList first renders the connect helper
 * is executed which accesses the redux state and whatever object is returned
 * is then passed to the LibraryList component as a props.
 */
export default connect(mapStateToProps)(LibraryList);