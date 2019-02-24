import { createStore } from 'redux';
import { createMixin }  from 'polymer-redux';

const initialState = {
    friends: ['Monica']
};

const reducer = (state, action) => {
    if(!state) return initialState;
    switch (action.type) {
        case 'ADD_FRIEND':
            const friends = state.friends.slice(0);
            friends.push(action.friend);
            console.log('friends', friends);
            return Object.assign({}, state, {friends : friends});
    }
};

const store = createStore(reducer);

const ReduxMixin = createMixin(store);

export { store };

export default ReduxMixin;