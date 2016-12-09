// State arg is not app state, only the state that this reducer is responsible for.
export default function(state = null, action) {
    // NOTE: Do not mutate state
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}