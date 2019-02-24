import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import { } from '@polymer/polymer/lib/elements/dom-repeat.js';

import ReduxMixin from './reducer';

// Define the class for a new element called custom-element
class FriendsList extends ReduxMixin(PolymerElement) {
    static get properties() {
        return {
            friends: {
                type: Array
            }
        }
    }

    static mapStateToProps(state) {
        return {
            friends: state.friends
        }
    }

    static get template() {
        return html`
            <h3>Friends List</h3>
            <ul>
                <template is="dom-repeat" items=[[friends]]>            
                    <li>{{item}}</li>
                </template>
            </ul>
            `
    }
}
// Register the new element with the browser
customElements.define('friends-list', FriendsList);