export const ADD_TO_LIST = 'add list item';
export const REMOVE_FROM_LIST = 'remove list item';

export function addNewItem(text) {
    return (dispatch) => {
        dispatch({
            type : ADD_TO_LIST,
            text
        })
    }
}