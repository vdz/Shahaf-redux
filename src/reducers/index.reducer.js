import {
    ADD_TO_LIST,
    REMOVE_FROM_LIST
} from '../actions/list.action.js';

export const default_state = {
    list : [
        'Anna The Great!',
        'Anna The Magnificent!',
        'Anna The Stringmaster!'
    ]
};

export function reducer(state = default_state, action) {

    switch (action.type) {
        case ADD_TO_LIST : {
            return {
                ...state,
                list : [
                    ...state.list,
                    action.text
                ]
            }
        }
        case REMOVE_FROM_LIST : {
            let new_list = [...state.list];
            delete new_list[action.index];

            return {
                ...state,
                list : new_list
            }
        }
    }

    return state;
}