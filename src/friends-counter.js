import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import ReduxMixin from './reducer';

// Define the class for a new element called custom-element
class FriendsCounter extends ReduxMixin(PolymerElement) {
    static get properties(){
        return {
            friends: {
                type: Array,
            },
            friendsCount: {
                type: Number,
                computed: 'computeFriendsCount(friends)'
            }
        }
    }

    static mapStateToProps(state){
        return {
            friends: state.friends
        }
    }

    static get template(){
        return html`
            <h1>Hello, You have [[friendsCount]] friends.</h1>`
    }

    computeFriendsCount(friends){
        return friends.length;
    }
}
// Register the new element with the browser
customElements.define('friends-counter', FriendsCounter);