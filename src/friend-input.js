import { PolymerElement, html } from "@polymer/polymer";
import ReduxMixin from './reducer';
import { store } from './reducer';

class FriendInput extends ReduxMixin(PolymerElement) {
    static get is() {
        return 'friend-input';
    }

    static get template() {
        return html`
            <input id="field" type="text">
            <button id="add">Add Friend</button>
        `
    }

    ready() {
        super.ready();
        this.$.add.addEventListener("click", () => {
            this.addFriend();
        })
    }

    static get actions() {
        return {
            add: function (field) {
                return {
                    type: 'ADD_FRIEND',
                    friends: field
                }
            }
        }
    }

    addFriend() {
        const field = this.$.field;
        console.log(field);
        if (field.value) {
            store.dispatch({
                type: 'ADD_FRIEND',
                friend: field.value
            });

            field.value = '';
            field.focus();
        }
    }
}

customElements.define(FriendInput.is, FriendInput);