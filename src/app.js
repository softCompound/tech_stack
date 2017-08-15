import React from 'react';
import { View } from 'react-native';
//react-redux is the communication bridge between react and redux
import { Provider } from 'react-redux';
//redux is not written just for react
import { createStore } from 'redux';
import reducers from './reducers';
// the import without {} is a default export and any component exported in a different manner
//should go inside the curly {} braces
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
    return (
        /**
             * The provider component works together with the store. All the data
             * required by the application is wrapped up together by this component
             * to be used by our app. The tricky bit for the Provider is that it can 
             * have "ONLY ONE SINGLE CHILD COMPONENT." Therefore we can have a single
             * view container that acts as a wrapper element. At the begining of the app start cycle
             * a store is created by the createStore property of redux library. The function
             * runs all the registered reducers and in this case invokes the LibraryReducer that 
             * reads the json file and then populates the redux store with an array of json objects
             * that defines the app data. Then, the store is passed as a props named store to the
             * provider which is a react component.
             */
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Header head="Tech Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;