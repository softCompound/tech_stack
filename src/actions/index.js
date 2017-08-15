export const SELECT_LIBRARY = 'select_library';

/**
 * Action creator are functions that returns an action object.
 * They all have to be wired up with redux.
*/
export const selectLibrary = (libraryId) => {
    return {
        type: SELECT_LIBRARY,
        payload: libraryId
    }
};